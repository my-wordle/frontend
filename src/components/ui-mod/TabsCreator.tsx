import type { FC, ReactNode } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

interface TabContent {
    tab: string;
    content: ReactNode;
}

interface Props {
    tabs: TabContent[];
}

export const TabsCreator: FC<Props> = ({ tabs }) => {
    if (tabs.length === 0) return null;

    return (
        <Tabs defaultValue={tabs[0].tab} className="w-[400px]">
            <TabsList>
                {tabs.map(({ tab }: TabContent) => (
                    <TabsTrigger key={tab} value={tab}>
                        {tab}
                    </TabsTrigger>
                ))}
            </TabsList>
            {tabs.map(({ tab, content }: TabContent) => (
                <TabsContent value={tab}>{content}</TabsContent>
            ))}
        </Tabs>
    );
};

export default TabsCreator;
