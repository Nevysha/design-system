// A fake project dashboard that uses every component: the Storybook showcase and the theme
// playground render it. Not part of the published library.
import { BellIcon, PlusIcon, RefreshCwIcon } from "lucide-react";
import { useState } from "react";
import { Badge } from "../components/badge";
import { Button } from "../components/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/card";
import { Checkbox } from "../components/checkbox";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../components/dialog";
import { Input } from "../components/input";
import { Label } from "../components/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from "../components/select";
import { Switch } from "../components/switch";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../components/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/tabs";
import { Textarea } from "../components/textarea";
import { toast, Toaster } from "../components/toast";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../components/tooltip";

const stats = [
  { label: "Deploys this week", value: "1,284", change: "+12.4%", variant: "success" },
  { label: "Median build time", value: "3m 42s", change: "+18s", variant: "warning" },
  { label: "Failed deploys", value: "7", change: "-3", variant: "success" },
] as const;

const deploys = [
  { id: 4182, service: "billing-api", status: "Healthy", when: "Today 09:12", by: "Mara" },
  { id: 4181, service: "search-index", status: "Degraded", when: "Today 08:47", by: "Jonas" },
  { id: 4179, service: "web", status: "Healthy", when: "Yesterday 17:30", by: "Mara" },
  { id: 4176, service: "notifications", status: "Failed", when: "Yesterday 11:05", by: "Ines" },
  { id: 4171, service: "auth", status: "Building", when: "Yesterday 09:58", by: "Theo" },
] as const;
const statusVariant = { Healthy: "success", Degraded: "warning", Failed: "danger", Building: "accent" } as const;

const members = [
  { name: "Mara Lindqvist", email: "mara@atlas.dev", role: "Owner" },
  { name: "Jonas Weber", email: "jonas@atlas.dev", role: "Admin" },
  { name: "Ines Duarte", email: "ines@atlas.dev", role: "Member" },
] as const;

function NewProjectDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button><PlusIcon aria-hidden /> New project</Button>
      </DialogTrigger>
      <DialogContent showCloseButton>
        <DialogHeader>
          <DialogTitle>Create a project</DialogTitle>
          <DialogDescription>Projects group services that deploy together.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-2">
          <Label htmlFor="np-name">Project name</Label>
          <Input id="np-name" placeholder="e.g. Atlas mobile" />
        </div>
        <DialogFooter>
          <DialogClose asChild><Button variant="secondary">Cancel</Button></DialogClose>
          <DialogClose asChild>
            <Button onClick={() => toast({ title: "Project created", description: "Atlas mobile is ready for its first deploy.", variant: "success" })}>
              Create
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function SettingsForm() {
  const [publicLink, setPublicLink] = useState(true);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Project settings</CardTitle>
        <CardDescription>Shown to everyone with access to Atlas.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="ps-name">Project name</Label>
          <Input id="ps-name" defaultValue="Atlas dashboard" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="ps-email">Owner email</Label>
          <Input id="ps-email" type="email" defaultValue="atlas@" aria-invalid aria-describedby="ps-email-error" />
          <p id="ps-email-error" className="text-sm text-danger-text">Enter a full email address.</p>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="ps-region">Region</Label>
          <Select defaultValue="fra">
            <SelectTrigger id="ps-region"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Europe</SelectLabel>
                <SelectItem value="fra">Frankfurt</SelectItem>
                <SelectItem value="par">Paris</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>Americas</SelectLabel>
                <SelectItem value="iad">Virginia</SelectItem>
                <SelectItem value="gru" disabled>São Paulo (soon)</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2 sm:col-span-2">
          <Label htmlFor="ps-desc">Description</Label>
          <Textarea id="ps-desc" defaultValue="Internal dashboard for deploys, builds and on-call." />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="ps-weekly" defaultChecked />
          <Label htmlFor="ps-weekly">Send me a weekly summary</Label>
        </div>
        <div className="flex items-center justify-between gap-2">
          <Label htmlFor="ps-public">Public status page</Label>
          <Switch id="ps-public" checked={publicLink} onCheckedChange={setPublicLink} />
        </div>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="ghost">Discard</Button>
        <Button onClick={() => toast({ title: "Settings saved" })}>Save changes</Button>
      </CardFooter>
    </Card>
  );
}

function DangerZone() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Archive project</CardTitle>
        <CardDescription>Members lose access. You can restore it for 30 days.</CardDescription>
      </CardHeader>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild><Button variant="danger">Archive Atlas</Button></DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Archive this project?</DialogTitle>
              <DialogDescription>Its 5 services stop deploying and 3 members lose access.</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild><Button variant="secondary">Cancel</Button></DialogClose>
              <DialogClose asChild>
                <Button variant="danger" onClick={() => toast({ title: "Couldn't archive", description: "billing-api has a deploy in progress.", variant: "danger" })}>
                  Archive
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}

/** A fake project dashboard built only from the design system's components and tokens. */
export function Dashboard() {
  return (
    <TooltipProvider>
      <div className="mx-auto grid max-w-5xl gap-6">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div className="grid gap-1">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-semibold">Atlas</h1>
              <Badge variant="accent">Pro</Badge>
            </div>
            <p className="text-text-muted">Deploys, builds and on-call for the Atlas platform.</p>
          </div>
          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Refresh" onClick={() => toast({ title: "Up to date", description: "Last checked a few seconds ago." })}>
                  <RefreshCwIcon aria-hidden />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Refresh</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="secondary" size="icon" aria-label="Notifications"><BellIcon aria-hidden /></Button>
              </TooltipTrigger>
              <TooltipContent>3 unread notifications</TooltipContent>
            </Tooltip>
            <NewProjectDialog />
          </div>
        </header>

        <h2 className="-mb-2 text-lg font-semibold">This week</h2>
        <section aria-label="This week" className="grid gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <Card key={s.label}>
              <CardHeader>
                <CardDescription>{s.label}</CardDescription>
                <CardTitle className="text-2xl">{s.value}</CardTitle>
              </CardHeader>
              <CardContent className="flex gap-2">
                <Badge variant={s.variant}>{s.change}</Badge>
                <Badge>7 days</Badge>
              </CardContent>
            </Card>
          ))}
        </section>

        <Tabs defaultValue="deploys">
          <TabsList aria-label="Project sections">
            <TabsTrigger value="deploys">Deploys</TabsTrigger>
            <TabsTrigger value="members">Members</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="billing" disabled>Billing</TabsTrigger>
          </TabsList>

          <TabsContent value="deploys">
            <Card className="gap-0 pt-0">
              <Table>
                <TableCaption>Latest deploys across all services</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Deploy</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>When</TableHead>
                    <TableHead>By</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {deploys.map((d) => (
                    <TableRow key={d.id}>
                      <TableCell className="font-semibold">#{d.id}</TableCell>
                      <TableCell>{d.service}</TableCell>
                      <TableCell><Badge variant={statusVariant[d.status]}>{d.status}</Badge></TableCell>
                      <TableCell className="text-text-muted">{d.when}</TableCell>
                      <TableCell>{d.by}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </TabsContent>

          <TabsContent value="members">
            <Card>
              <CardHeader>
                <CardTitle>Members</CardTitle>
                <CardDescription>3 people can deploy Atlas.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2">
                {members.map((m) => (
                  <div key={m.email} className="flex items-center justify-between gap-4 rounded-md bg-control px-3 py-2">
                    <div className="grid">
                      <span className="font-semibold">{m.name}</span>
                      <span className="text-sm text-text-muted">{m.email}</span>
                    </div>
                    <Badge variant={m.role === "Owner" ? "accent" : "neutral"}>{m.role}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="grid gap-4">
            <SettingsForm />
            <DangerZone />
          </TabsContent>
        </Tabs>

        <div role="note" className="grid gap-1 rounded-lg border border-warning-border bg-warning-subtle p-4">
          <span className="font-semibold text-warning-text">Storage almost full</span>
          <span>You've used 9.2 of 10 GB. Builds older than 90 days are removed on Dec 1.</span>
        </div>
      </div>
      <Toaster />
    </TooltipProvider>
  );
}
