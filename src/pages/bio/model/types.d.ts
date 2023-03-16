declare namespace Bio {
  export interface BioData {
		id: number;
		year: Date;
		description: string;
	}
  
  export interface BiosResponse {
    message: string
    bios: BioData[]
  }
  export interface BioResponse {
		message: string;
		bio: BioData;
	}
}