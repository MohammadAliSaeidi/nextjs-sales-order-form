import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/shared/components/ui/card";

export const FORM_TITLE_ID = "sales-order-form-title";
const CUSTOMER_INFO_TITLE_ID = "sales-order-form-customer-info-title";
const ITEMS_TITLE_ID = "sales-order-form-items-title";
const SUMMARY_TITLE_ID = "sales-order-form-summary-title";

export default function SalesOrderForm() {
	return (
		<form
			aria-labelledby={FORM_TITLE_ID}
			className="grid grid-cols-12 gap-6 flex-1"
		>
			<Card className="col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-4">
				<CardHeader>
					<CardTitle>
						<h2 id={CUSTOMER_INFO_TITLE_ID}>اطلاعات مشتری</h2>
					</CardTitle>
				</CardHeader>
				<CardContent>{/* Customer fields */}</CardContent>
			</Card>

			<Card className="col-span-12 md:col-span-6 lg:col-span-7 xl:col-span-8">
				<CardHeader>
					<CardTitle>
						<h2 id={ITEMS_TITLE_ID}>اقلام سفارش</h2>
					</CardTitle>
				</CardHeader>
				<CardContent>{/* Order item fields */}</CardContent>
			</Card>

			<Card className="col-span-12">
				<CardHeader>
					<CardTitle>
						<h2 id={SUMMARY_TITLE_ID}>خلاصه سفارش</h2>
					</CardTitle>
				</CardHeader>
				<CardContent>{/* Order summary */}</CardContent>
			</Card>
		</form>
	);
}
