declare global {
  namespace NodeJS {
    interface Global {
      user: User;
    }
  }
}

type User = {
  id: string;
  name: string;
};

(global as any).user = {
  id: "1",
  name: "John Doe",
} as User;

export async function getUser(userId: string): Promise<User> {
  // return global.user as User;
  return (global as NodeJS.Global & typeof globalThis).user as User;
}

export async function updateUser(userId: string, name: string) {
  //global.user.name = name;
  (global as NodeJS.Global & typeof globalThis).user.name = name;
}
