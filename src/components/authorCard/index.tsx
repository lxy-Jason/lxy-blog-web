import {AuthorCardProps} from "@/types/layout";

export default function (props: {
  option:AuthorCardProps
}){
  return (
    <div id="author-card" className="sticky ">
      <div className="w-52 flex flex-col justify-center items-center bg-white pt-6  pb-4 card-shadow ml-2 dark:bg-dark dark:card-shadow-dark">
        <div className="px-10 flex flex-col justify-center items-center">

        </div>

      </div>
    </div>
    )
}