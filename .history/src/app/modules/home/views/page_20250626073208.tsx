import Banner from "@/app/modules/home/components/Banner.component";
import Best_Sellers from "@/app/modules/home/components/Best_Sellers.component";
import Popular_Shellfish from "@/app/modules/home/components/Popular_Shellfish.component";
import Fulton_Finsider from "@/app/modules/home/components/Fulton_Finsider.component";
import Healthy_Meals from "@/app/modules/home/components/Healthy_Meals.component";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Banner/>
      <Best_Sellers/>
      <Popular_Shellfish />
      <Fulton_Finsider />
      <Healthy_Meals />
    </div>
  );
}
