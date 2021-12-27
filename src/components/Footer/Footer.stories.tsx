import { ComponentStory, ComponentMeta } from "@storybook/react";
import FooterComp from "./Footer";
import { ThemeModeContext } from "../../contexts";

export default {
  title: "Webstacks/Footer",
  component: FooterComp,
  decorators: [
    (Story, context) => (
      <ThemeModeContext.Consumer>
        {(theme) => {
          theme = context?.globals?.theme;
          return <Story them={context?.globals?.theme} />;
        }}
      </ThemeModeContext.Consumer>
    ),
  ],
} as ComponentMeta<typeof FooterComp>;

const getTheme = (context: any) => {
  return context?.globals.theme;
};

const Template: ComponentStory<typeof FooterComp> = (args, context) => (
  <FooterComp {...{ ...args, theme: getTheme(context) }} />
);
export const Footer = Template.bind({});
