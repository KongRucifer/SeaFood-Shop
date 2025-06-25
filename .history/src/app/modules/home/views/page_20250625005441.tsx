import Content1 from "@/app/modules/home/components/contents/Content1";
import Content2 from "@/app/modules/home/components/contents/Content2";
import Content3 from "@/app/modules/home/components/contents/Content3";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Content1 />   
      <Content2 /> 
         
    </div>
  );
}