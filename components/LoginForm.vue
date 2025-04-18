<template>
	<div class="max-w-80 container mt-17 font-nunito "> 
		<h1 class="text-center font-bold text-3xl mb-10"> Войдите в аккаунт</h1>
		<form class="relative" @submit="onSubmit">
			<FormField v-slot="{ componentField }" name="email">
				<FormItem class="pb-3">
					<FormLabel>Электронная почта</FormLabel>
					<FormControl>
						<Input type="text" placeholder="Введите вашу эл. почту" v-bind="componentField" />
					</FormControl>
					<FormMessage />
				</FormItem>
			</FormField>
			<FormField v-slot="{ componentField }" name="password">
				<FormItem class="pb-4 px">
					<FormLabel>Пароль</FormLabel>
					<FormControl>
						<Input type="text" placeholder="Введите пароль" v-bind="componentField" />
					</FormControl>
					<FormMessage />
				</FormItem>
			</FormField>
			<Button class="px-15 container text-lg py-5" type="submit">
				Войти
			</Button>
		</form>
		<h1 class="text-center font-bold mb-2 mt-5"> Выбрать другой способ входа</h1>
		<div class="flex flex-col gap-2">
			<Button variant="outline" class="px-15 container text-lg py-5" type="submit">
				Зарегистрироваться
			</Button>
			<Button variant="outline" class="px-15 container text-lg py-5" type="submit">
				Зарегистрироваться
			</Button>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { useForm } from 'vee-validate'
	import { toTypedSchema } from '@vee-validate/zod'
	import * as z from 'zod'

	import { Button } from '@/components/ui/button'
	import {
		FormControl,
		FormField,
		FormItem,
		FormLabel,
		FormMessage,
	} from '@/components/ui/form'
	import { Input } from '@/components/ui/input'

	const formSchema = toTypedSchema(z.object({
		email: z.string().email({ message: "Недопустимая почта" }),
		password: z.string().min(8, {message: "Пароль должен содержать не менее 8 символов"}) 
	}))

	const form = useForm({
		validationSchema: formSchema,
	})

	const onSubmit = form.handleSubmit((values) => {
		console.log('Form submitted!', values)
	})
</script>

