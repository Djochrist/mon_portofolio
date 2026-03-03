import { type dummySchema } from "@shared/schema";

export interface IStorage {
}

export class MemStorage implements IStorage {
  constructor() {
  }
}

export const storage = new MemStorage();
