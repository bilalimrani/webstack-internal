import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputComp from "./Input";

export default {
  title: "Webstacks/Input",
  component: InputComp,
} as ComponentMeta<typeof InputComp>;

const Template: ComponentStory<typeof InputComp> = (args) => (
  <InputComp {...args} />
);

export const Input = Template.bind({});
Input.args = {
  type: "text",
  label: "Email Address",
};
