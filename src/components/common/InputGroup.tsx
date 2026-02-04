"use client";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

export function InputGroupButtonExample() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup className="bg-white py-7 rounded-lg">
        <InputGroupInput placeholder="Email address" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton className="bg-[#BE968E] text-white p-5 rounded-md">
            Send
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
