const FORM_TITLE_ID = "sales-order-form-title";
const CUSTOMER_INFO_TITLE_ID = "sales-order-form-customer-info-title";
const ITEMS_TITLE_ID = "sales-order-form-items-title";

export default function SalesOrderForm() {
	return (
		<article className="w-full" aria-labelledby={FORM_TITLE_ID}>
			<header>
				<h1 id={FORM_TITLE_ID}>ثبت سفارش فروش</h1>
				<p>اطلاعات مشتری و کالاهای سفارش را وارد کنید</p>
			</header>
			<form aria-labelledby={FORM_TITLE_ID}>
				<section aria-labelledby={CUSTOMER_INFO_TITLE_ID}>
					<h2 id={CUSTOMER_INFO_TITLE_ID}>اطلاعات مشتری</h2>
				</section>
				<section aria-labelledby={ITEMS_TITLE_ID}>
					<h2 id={ITEMS_TITLE_ID}>اقلام سفارش</h2>
				</section>
				<section>
					<h2>خلاصه سفارش</h2>
				</section>
			</form>
		</article>
	);
}
