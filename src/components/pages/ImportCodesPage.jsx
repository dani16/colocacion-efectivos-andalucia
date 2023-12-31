import ImportCodes from '../import-codes/ImportCodes';

const ImportCodesPage = () => {
	return (
		<section className="flex flex-col gap-2 m-10">
			<h1 className="text-center mb-4 text-2xl font-extrabold text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
				Importar Códigos
			</h1>
			<ImportCodes />
		</section>
	);
};

export default ImportCodesPage;
