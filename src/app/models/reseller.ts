export class Reseller {
    constructor (
        public id: number,
        public name: string,
        public email: string,
        public password: string,
        public document: string,
        public phone: string,
        public minimum_value: number,
        public enable: boolean,
        public created_at: string,
        public bonus?:any 
    ) { }
}