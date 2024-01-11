
import React from "react";
import { View, Text } from "react-native";
import { s } from "react-native-wind":

interface ColorVariants {
  default: {
    container: 800,
    content: 100,
  };
  tonal: {
    container: 100,
    content: 800,
  };
  outline: {
    container: 50,
    content: 800,
  };
  elevated: {
    container: 800,
    content: 100,
  };
}

interface ChipVariantOptions {
  chip: s`inline-flex items-center px-3 py-2 rounded-full`;
  text: s`text-sm font-medium`;
  default: s`border-none`; // No border for default
  tonal: s`border-none`; // No border for tonal
  // Option 1: Dynamic border style
  outline: s`border-1`; // Border inherits chip's color
  // Option 2: Separate color palette
  // outline: s`border-1 border-${BorderColorVariants.outline}`;
  elevated: s`border-none shadow`;
}

interface ChipProps {
  text: string;
  color?: string;
  variant?: keyof ChipVariantOptions;
}

const Chip: React.FC<ChipProps> = ({ text, color = "blue", variant = "default", ...args }) => {
  const getVariantStyles = (variant: keyof ChipVariantOptions): ChipVariantOptions[variant] => {
    return ChipVariantOptions[variant];
  };

  const getColorStyles = (color: string): { text: string; container: string } => {
    return {
      text: s`text-${color}-${ColorVariants[variant].content}`,
      container: s`bg-${color}-${ColorVariants[variant].container} border-${color}-${ColorVariants[variant].content}`,
    };
  };

  return (
    <View style={[ChipVariantOptions.chip]}>
      <Text
        style={[ChipVariantOptions.text, getVariantStyles(variant), getColorStyles(color).text]}
      >
        {text}
      </Text>
    </View>
  );
};

export default Chip;
