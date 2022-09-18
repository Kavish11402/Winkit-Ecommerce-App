import BottomBanner from "../Home/Body/Components/Bottom/BottomBanner";
import {Tab} from "@headlessui/react";

export default function AccountBodyComponent()
{
  return(

      <div className={"max-w-[73%] mx-auto mt-10 border-b-2 border-gray-300 pb-12"}>

          <div>
              <Tab.Group vertical>

                  <Tab.List>
                      <Tab>Tab 1</Tab>
                      <Tab>Tab 2</Tab>
                      <Tab>Tab 3</Tab>
                  </Tab.List>

                  <Tab.Panels>
                      <Tab.Panel>Content 1</Tab.Panel>
                      <Tab.Panel>Content 2</Tab.Panel>
                      <Tab.Panel>Content 3</Tab.Panel>
                  </Tab.Panels>

              </Tab.Group>
          </div>

          <BottomBanner/>


      </div>

  );
}