import { rest } from "msw";
import { setupServer } from "msw/node";
import data from "../../components/RenderProps/mockData";
import { render, waitFor } from "@testing-library/react";
import DataProvider4 from "../../components/RenderProps/DataProvider4";

const endpoint = "/swr-test";

const server = setupServer(
  rest.get(endpoint, async (req, res, ctx) => {
    res(ctx.json({ ...data }));
    return test;
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("Test DataProvider 4, successfull data", async () => {
  const component = render(
    <DataProvider4 url="/swr-test" render={(data) => <Main {...data} />} />
  );
  waitFor(() => component);
  //component.debug();
  expect(component.container).toHaveTextContent("Gibson Han");
});

test("Test Loading data error", async () => {
  server.use(endpoint, (req, res, ctx) => {
    return res(ctx.status(500));
  });

  const component = render(
    <DataProvider4 url="/swr-test" render={(data) => <Main {...data} />} />
  );

  expect(component.container).toHaveTextContent("An error occured");
});
