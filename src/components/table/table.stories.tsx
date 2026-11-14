import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Badge } from "../badge";
import { Button } from "../button";
import { Card } from "../card";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "./table";

const meta = { title: "Components/Table", component: Table, tags: ["autodocs"] } satisfies Meta<typeof Table>;
export default meta;
type Story = StoryObj<typeof meta>;

const deploys = [
  { id: 4182, service: "billing-api", status: "Healthy", when: "2026-11-14 09:12", by: "Mara" },
  { id: 4181, service: "search", status: "Degraded", when: "2026-11-14 08:47", by: "Jonas" },
  { id: 4179, service: "web", status: "Healthy", when: "2026-11-13 17:30", by: "Mara" },
  { id: 4176, service: "notifications", status: "Failed", when: "2026-11-13 11:05", by: "Ines" },
];
const variant = { Healthy: "success", Degraded: "warning", Failed: "danger" } as const;

export const Basic: Story = {
  render: () => (
    <Table>
      <TableCaption>Deploys in the last 24 hours</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Deploy</TableHead>
          <TableHead>Service</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>When</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {deploys.map((d) => (
          <TableRow key={d.id}>
            <TableCell className="text-text-muted tabular-nums">#{d.id}</TableCell>
            <TableCell className="font-medium">{d.service}</TableCell>
            <TableCell>
              <Badge variant={variant[d.status as keyof typeof variant]}>{d.status}</Badge>
            </TableCell>
            <TableCell className="text-text-muted tabular-nums">{d.when}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={4}>4 deploys, 1 failed</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

export const InCardWithSelection: Story = {
  render: function Render() {
    const [selected, setSelected] = useState(4181);
    return (
      <Card className="py-0">
        <Table aria-label="Deploys">
          <TableHeader>
            <TableRow>
              <TableHead>Service</TableHead>
              <TableHead>By</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {deploys.map((d) => (
              <TableRow
                key={d.id}
                data-state={d.id === selected ? "selected" : undefined}
                aria-selected={d.id === selected}
              >
                <TableCell className="font-medium">{d.service}</TableCell>
                <TableCell>{d.by}</TableCell>
                <TableCell className="text-right">
                  <Button size="sm" variant="ghost" onClick={() => setSelected(d.id)}>
                    Open
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    );
  },
};
