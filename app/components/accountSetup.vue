<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as zod from "zod";
import {
  AccordionRoot,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
} from "reka-ui";

// 1. Define Form Validation Schema with Zod
const formSchema = toTypedSchema(
  zod.object({
    username: zod.string().min(3, "Username must be at least 3 characters"),
    email: zod.string().email("Must be a valid email address"),
  }),
);

// 2. Setup Vee-Validate Form
const { defineField, errors, handleSubmit } = useForm({
  validationSchema: formSchema,
});

const [username, usernameProps] = defineField("username");
const [email, emailProps] = defineField("email");

const onSubmit = handleSubmit((values) => {
  alert(`Form Submitted! Data: ${JSON.stringify(values)}`);
});
</script>

<template>
  <!-- Reka UI Accordion Primitive Wrapper -->
  <AccordionRoot
    class="w-full max-w-md bg-slate-900 border border-slate-800 rounded-xl overflow-hidden"
    type="single"
    collapsible
    default-value="form-step"
  >
    <AccordionItem
      value="form-step"
      class="border-b border-slate-800 last:border-none"
    >
      <AccordionHeader class="flex">
        <AccordionTrigger
          class="w-full text-left font-semibold p-4 text-emerald-400 bg-slate-900/50 hover:bg-slate-800/50 transition-colors flex justify-between items-center"
        >
          <span>Step 1: Account Setup Primitive</span>
          <span class="text-xs text-slate-500">(Click to Toggle)</span>
        </AccordionTrigger>
      </AccordionHeader>

      <AccordionContent class="p-6 space-y-4 bg-slate-950/40">
        <form @submit="onSubmit" class="space-y-4">
          <!-- Username Input -->
          <div class="flex flex-col space-y-1">
            <label class="text-xs font-medium text-slate-400">Username</label>
            <input
              v-model="username"
              v-bind="usernameProps"
              type="text"
              class="px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-emerald-500"
            />
            <span class="text-xs text-rose-400 mt-0.5">{{
              errors.username
            }}</span>
          </div>

          <!-- Email Input -->
          <div class="flex flex-col space-y-1">
            <label class="text-xs font-medium text-slate-400"
              >Email Address</label
            >
            <input
              v-model="email"
              v-bind="emailProps"
              type="email"
              class="px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:border-emerald-500"
            />
            <span class="text-xs text-rose-400 mt-0.5">{{ errors.email }}</span>
          </div>

          <Button type="submit" class="w-full mt-2"> Submit Setup </Button>
        </form>
      </AccordionContent>
    </AccordionItem>
  </AccordionRoot>
</template>
