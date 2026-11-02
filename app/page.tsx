import SalesOrderForm, {
	FORM_TITLE_ID,
} from "@/feature/sales-order-form/components/sales-order-form";

export default function Home() {
	return (
		<main className="w-full flex-1 flex flex-col">
			<header
				aria-labelledby={FORM_TITLE_ID}
				className="page-title-container"
			>
				<h1 className="page-title" id={FORM_TITLE_ID}>
					ثبت سفارش فروش
				</h1>
				<p className="page-description sm:w-sm">
					اطلاعات مشتری و کالاهای سفارش را وارد کنید
				</p>
			</header>
			<SalesOrderForm />
		</main>
	);
}
