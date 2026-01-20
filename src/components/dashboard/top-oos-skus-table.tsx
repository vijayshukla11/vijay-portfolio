import { topOosSkusData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

const TopOosSkusTable = () => (
    <Card className="glassmorphic-card h-full">
        <CardHeader>
            <CardTitle>Top Out-of-Stock SKUs</CardTitle>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>SKU</TableHead>
                        <TableHead className="text-right">OOS Instances</TableHead>
                        <TableHead className="text-right">Est. Lost GMV</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {topOosSkusData.map((item) => (
                        <TableRow key={item.sku}>
                            <TableCell className="font-medium">{item.sku}</TableCell>
                            <TableCell className="text-right">{item.oosInstances}</TableCell>
                            <TableCell className="text-right">₹{item.lostGmv.toLocaleString()}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
    </Card>
);

export default TopOosSkusTable;
