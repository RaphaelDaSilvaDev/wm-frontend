import { Page } from "../../components/Page";
import { Manager } from "../../components/Manager";
import { ToolTip } from "../../components/ToolTip";

export function Home() {
  const header = ["placa do veículo", "modelo", "cliente"];

  const body = [
    {
      plate: <span>ABC-1234</span>,
      model: <span>Uno</span>,
      client: <span>Ronaldo</span>,
    },
    {
      plate: <span>ABC-1235</span>,
      model: <span>Palio</span>,
      client: <span>Fernando</span>,
    },
    {
      plate: <span>ABC-1284</span>,
      model: <span>Civic</span>,
      client: <span>Pedro</span>,
    },
    {
      plate: <span>ABC-1234</span>,
      model: <span>Uno</span>,
      client: <span>Ronaldo</span>,
    },
    {
      plate: <span>ABC-1235</span>,
      model: <span>Palio</span>,
      client: <span>Fernando</span>,
    },
    {
      plate: <span>ABC-1284</span>,
      model: <span>Civic</span>,
      client: <span>Pedro</span>,
    },
    {
      plate: <span>ABC-1234</span>,
      model: <span>Uno</span>,
      client: <span>Ronaldo</span>,
    },
    {
      plate: <span>ABC-1235</span>,
      model: <span>Palio</span>,
      client: <span>Fernando</span>,
    },
    {
      plate: <span>ABC-1284</span>,
      model: <span>Civic</span>,
      client: <span>Pedro</span>,
    },
    {
      plate: <span>ABC-1234</span>,
      model: <span>Uno</span>,
      client: <span>Ronaldo</span>,
    },
    {
      plate: <span>ABC-1235</span>,
      model: <span>Palio</span>,
      client: <span>Fernando</span>,
    },
    {
      plate: <span>ABC-1284</span>,
      model: <span>Civic</span>,
      client: <span>Pedro</span>,
    },
    {
      plate: <span>ABC-1234</span>,
      model: <span>Uno</span>,
      client: <span>Ronaldo</span>,
    },
    {
      plate: <span>ABC-1235</span>,
      model: <span>Palio</span>,
      client: <span>Fernando</span>,
    },
    {
      plate: <span>ABC-1284</span>,
      model: <span>Civic</span>,
      client: <span>Pedro</span>,
    },
    {
      plate: <span>ABC-1234</span>,
      model: <span>Uno</span>,
      client: <span>Ronaldo</span>,
    },
    {
      plate: <span>ABC-1235</span>,
      model: <span>Palio</span>,
      client: <span>Fernando</span>,
    },
    {
      plate: <span>ABC-1284</span>,
      model: <span>Civic</span>,
      client: <span>Pedro</span>,
    },
    {
      plate: <span>ABC-1234</span>,
      model: <span>Uno</span>,
      client: <span>Ronaldo</span>,
    },
    {
      plate: <span>ABC-1235</span>,
      model: <span>Palio</span>,
      client: <span>Fernando</span>,
    },
    {
      plate: <span>ABC-1284</span>,
      model: <span>Civic</span>,
      client: <span>Pedro</span>,
    },
  ];

  const items = [<span>AAA</span>, <span>BBB</span>, <span>CCC</span>];

  const options = <ToolTip items={items} />;

  return (
    <Page>
      <Manager header={header} body={body} options={options} />
    </Page>
  );
}
