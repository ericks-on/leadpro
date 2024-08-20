import LoginForm from "./ui/login-form";


export default async function Home() {
  return ( 
    <main className="min-w-screen min-h-screen flex justify-center items-center">
      <div className="w-1/2 h-1/2 flex flex-col items-center justify-center gap-4">
        <LoginForm />
      </div>
    </main>
  );
}
