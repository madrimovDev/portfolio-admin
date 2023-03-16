export const formatDate = (isoString: string, format: string): string => {
	const date = new Date(isoString);
	const year = date.getFullYear().toString();
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const day = date.getDate().toString().padStart(2, '0');

	// Replace placeholders in format string with date parts
	return format.replace('YYYY', year).replace('MM', month).replace('DD', day);
};
