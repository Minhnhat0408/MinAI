import { FileAudio } from "lucide-react";

import Heading from "@/components/heading";
import { Empty } from "@/components/empty";

const VideoPage = async () => {

  return ( 
    <section>
       <Heading
        title="Video Generation"
        description="Turn your prompt into video."
        icon={FileAudio}
        iconColor="text-orange-700"
        bgColor="bg-orange-700/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <Empty label="No models updated yet. Please wait!"/>
      </div>
    </section>
   );
}
 
export default VideoPage;