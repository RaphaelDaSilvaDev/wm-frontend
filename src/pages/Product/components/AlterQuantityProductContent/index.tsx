import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { FormProvider, useForm } from "react-hook-form";
import { InputLabel } from "../../../../components/InputWithLabel";
import { ToastStyle } from "../../../../components/Toast";
import { EditProductService } from "../CreateProduct/service";
import { IEditQuantityUpdate } from "./interface";
import { AlterQuantityProduct, AlterQuantityProductType } from "./schema";
import * as S from "./styles";

interface Props {
  quantity: number;
  id: string;
  reload: () => void;
  setModalOpen: React.Dispatch<React.SetStateAction<JSX.Element>>;
}

export function AlterQuantityProductContent({ quantity, id, reload, setModalOpen }: Props) {
  const methods = useForm<AlterQuantityProductType>({
    resolver: zodResolver(AlterQuantityProduct),
    mode: "onSubmit",
    defaultValues: {
      quantity,
    },
  });

  async function handleOnAlterQuantity() {
    const payload: IEditQuantityUpdate = { quantity: methods.watch("quantity") };

    try {
      await EditProductService(payload, id);
      reload();
      setModalOpen(<></>);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.message);
        ToastStyle({ message: error.response?.data.message, styleToast: "error" });
      }
    }
  }

  return (
    <FormProvider {...methods}>
      <S.Container id="formModal" onSubmit={methods.handleSubmit(handleOnAlterQuantity)}>
        <InputLabel
          hasError={methods.formState.errors.quantity?.message ? true : false}
          placeholder="Insira a quantidade do produto"
          registerText="quantity"
          label="Quantidade do produto"
          type="number"
          min={0}
        />
      </S.Container>
    </FormProvider>
  );
}
