import { render, screen, within } from "@testing-library/react";
import { axeViolations } from "@/test/axe";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "./table";

const Example = ({ selected = false }: { selected?: boolean }) => (
  <Table className="extra">
    <TableCaption>Recent deploys</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>Service</TableHead>
        <TableHead>Status</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow data-testid="row" data-state={selected ? "selected" : undefined} aria-selected={selected}>
        <TableCell>billing-api</TableCell>
        <TableCell>Healthy</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>search</TableCell>
        <TableCell>Degraded</TableCell>
      </TableRow>
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableCell>2 services</TableCell>
        <TableCell />
      </TableRow>
    </TableFooter>
  </Table>
);

describe("Table", () => {
  it("keeps table semantics: caption, column headers, cells", () => {
    render(<Example />);
    const table = screen.getByRole("table", { name: "Recent deploys" });
    expect(within(table).getAllByRole("columnheader").map((h) => h.textContent)).toEqual(["Service", "Status"]);
    expect(within(table).getByRole("cell", { name: "billing-api" })).toBeInTheDocument();
    expect(within(table).getAllByRole("row")).toHaveLength(4);
  });

  it("highlights a selected row", () => {
    render(<Example selected />);
    expect(screen.getByTestId("row")).toHaveAttribute("data-state", "selected");
    expect(screen.getByTestId("row")).toHaveClass("data-[state=selected]:bg-accent-subtle");
  });

  it("merges className on the table and scrolls in its own container", () => {
    render(<Example />);
    const table = screen.getByRole("table");
    expect(table).toHaveClass("extra", "w-full");
    expect(table.parentElement).toHaveClass("overflow-x-auto");
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<Example selected />);
    expect(await axeViolations(container)).toEqual([]);
  });
});
