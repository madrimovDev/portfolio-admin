interface IStorage {
	setItem(key: string, value: any): void;
	getItem(key: string): any;
	removeItem(key: string): void;
	clear(): void;
	getAllItems(): {[key: string]: any};
}

const storage: IStorage = {
	setItem(key: string, value: any): void {
		localStorage.setItem(key, JSON.stringify(value));
	},
	getItem(key: string): any {
		const value = localStorage.getItem(key);
		return value ? JSON.parse(value) : null;
	},
	removeItem(key: string): void {
		localStorage.removeItem(key);
	},
	clear(): void {
		localStorage.clear();
	},
	getAllItems(): {[key: string]: any} {
		const items: {[key: string]: any} = {};
		for (let i = 0; i < localStorage.length; i++) {
			const key = localStorage.key(i)!;
			const value = this.getItem(key);
			items[key] = value;
		}
		return items;
	},
};

export default storage