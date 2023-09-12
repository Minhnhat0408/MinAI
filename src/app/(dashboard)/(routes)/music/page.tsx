import { Music } from "lucide-react";

import Heading from "@/components/heading";
import { Empty } from "@/components/empty";

const MusicPage = async () => {

  return ( 
    <section>
   <Heading
        title="Music Generation"
        description="Turn your prompt into music."
        icon={Music}
        iconColor="text-emerald-500"
        bgColor="bg-emerald-500/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <Empty label="No models updated yet. Please wait!"/>
      </div>
    </section>
   );
}
 
export default MusicPage;