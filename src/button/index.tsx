import { defineComponent, PropType } from "vue";
import "uno.css";

export type ISize = "small" | "medium" | "large";
export type IColor =
  | "black"
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";

export const props = {
  color: {
    type: String as PropType<IColor>,
    default: "blue",
  },
  size: {
    type: String as PropType<ISize>,
    default: "medium",
  },
  plain: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: "",
  },
};

export default defineComponent({
  name: "MyButton",
  props,
  setup(props, { slots }) {
    // TODO py-1.5 有小数的情况
    const size = {
      small: {
        x: 2,
        y: 1,
        text: "sm",
      },
      medium: {
        x: 3,
        y: 1.5,
        text: "base",
      },
      large: {
        x: 4,
        y: 2,
        text: "lg",
      },
    };

    return () => (
      <button
        class={`
        px-${size[props.size].x}
        py-${size[props.size].y}
        
        bg-${props.color}-${props.plain ? "100" : "500"}
        hover:bg-${props.color}-400
        
        ${props.round ? "rounded-full" : "rounded-lg"}
        border
        border-solid
        border-${props.color}-${props.plain ? "500" : "500"}

        text-${size[props.size].text}
        text-${props.plain ? props.color + "-500" : "white"}
        hover:text-white
        
        cursor-pointer
        m-1
      `}
      >
        {props.icon !== "" ? (
          <i class={`i-ic-baseline-${props.icon} p-3`}></i>
        ) : (
          ""
        )}
        {slots.default ? slots.default() : "MyButton"}
      </button>
    );
  },
});
