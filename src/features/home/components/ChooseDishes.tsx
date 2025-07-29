import { Input } from '@/components/ui/input';
import { Tabs } from '@radix-ui/react-tabs';
import { Search } from 'lucide-react';
import { TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select } from '@radix-ui/react-select';
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../components/ui/select';

export default function ChooseDishes() {
  return (
    <div className='h-full text-white p-[25px] w-full'>
      <div className='flex items-center justify-between'>
        <div>
          <h2 className='text-3xl text-white font-bold'>Jaegar Resto</h2>
          <time className='text-base text-gray-300 mt-3'>
            Tuesday, 2 Feb 2021
          </time>
        </div>
        <div>
          <div className='relative flex items-center'>
            <Search className='absolute size-5 text-white left-[10px]' />
            <Input
              className='bg-[#393C49] pl-[40px] placeholder:text-gray-300 w-[220px] h-[48px] border-gray-500 text-white'
              placeholder='Search for food, coffe, etc..'
            />
          </div>
        </div>
      </div>

      <div className='w-full my-5'>
        <Tabs defaultValue='1' className='w-full'>
          <TabsList className='w-full flex justify-start gap-10 h-[60px] border-b-1 bg-transparent border-gray-500 rounded-none'>
            <TabsTrigger className='p-0' value='1'>
              Hot Dishes
            </TabsTrigger>
            <TabsTrigger value='2'>Cold Dishes</TabsTrigger>
            <TabsTrigger value='3'>Soup</TabsTrigger>
            <TabsTrigger value='4'>Grill</TabsTrigger>
            <TabsTrigger value='5'>Appetizer</TabsTrigger>
            <TabsTrigger value='6'>Dessert</TabsTrigger>
          </TabsList>

          <TabsContent value='1'>
            Make changes to your account here. 1
          </TabsContent>

          <TabsContent value='2'>
            Make changes to your account here. 2
          </TabsContent>

          <TabsContent value='3'>
            Make changes to your account here. 3
          </TabsContent>

          <TabsContent value='4'>
            Make changes to your account here. 4
          </TabsContent>

          <TabsContent value='5'>
            Make changes to your account here. 5
          </TabsContent>

          <TabsContent value='6'>
            Make changes to your account here. 6
          </TabsContent>
        </Tabs>
      </div>

      <div className='flex justify-between items-center'>
        <h3 className='font-bold text-2xl'>Choose Dishes</h3>
        <Select>
          <SelectTrigger className='w-[180px] !h-[48px] !bg-[#1F1D2B] border-gray-500'>
            <SelectValue className='' placeholder='Dine In' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='light'>Light</SelectItem>
            <SelectItem value='dark'>Dark</SelectItem>
            <SelectItem value='system'>System</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
