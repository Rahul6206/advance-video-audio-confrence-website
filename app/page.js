
import Homepage from "@/pages/Homepage";
import CreateRoom  from "@/pages/CreateRoom";
export default function Home() {
  return (
    <div className="w-screen h-screen bg-[#011321]   flex flex-col gap-2 justify-between" >
      
      <div className=" mt-[100px] sm:h-[60vh] h-fit  flex items-center justify-center">
        <Homepage />
      </div>
      
      
    </div>
  );
}
