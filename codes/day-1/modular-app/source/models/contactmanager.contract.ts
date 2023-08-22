export interface Manager<T> {
    add(data: T): boolean;
    get(email: string): T | undefined | null;
    getAll(): T[];
}