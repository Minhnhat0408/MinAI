import { Settings } from "lucide-react";

import Heading from "@/components/heading";
import { Empty } from "@/components/empty";

const SettingsPage = async () => {

  return ( 
    <section>
      <Heading
        title="Settings"
        description="Manage account settings."
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <Empty label="Nothing in settings yet."/>
      </div>
    </section>
   );
}
 
export default SettingsPage;