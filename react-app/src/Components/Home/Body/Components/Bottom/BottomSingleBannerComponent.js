export default function BottomSingleBannerComponent({Image, Heading, Description})
{
  return(
    <div className={"border-2 border-gray-300 flex flex-col items-center justify-center p-4 mx-8 rounded-2xl "}>

      <div> <img src={Image}  alt={"Image"} className={"h-24"}/> </div>

      <div className={"font-semibold font-Ubuntu text-lg mt-4"}> {Heading} </div>

      <div className={"text-sm text-center mt-3"}> {Description} </div>

    </div>
  );
}