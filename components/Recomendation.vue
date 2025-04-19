<template>
	<div class="container mt-20">
		<h1 class="text-[40px] font-nunito font-bold border-l-4 rounded-l-xs leading-[50px] border-l-primary pl-5">Рекомендовано на основе ваших оценок</h1>
		<div class="flex gap-10">
			<!-- здесь карточки в отдельный компонент вынесу и для каждой v-for будет для рендера содержимого -->
				<div class="w-64 mt-8">
					<div class="flex justify-center p-6 bg-muted rounded-lg h-[260px]">
						<NuxtImg format="webp" src="/bear.png" alt="Logo" />
					</div>
					<div class="mt-4 flex gap-4">
						<div class="flex items-center gap-2">
							<Star color="#f3da0b" fill="#f3da0b" class="w-5" />
							<p>8.9</p>
						</div>
						<div class="flex items-center gap-2">
							<MessageSquare color="#353535" class="w-5 mt-1" />
							<p>27</p>
						</div>
					</div>
					<p class="mt-2 mb-2 text-2xl">Зеленый кайф</p>
					<p class="mb-4 text-xs text-secondary">Стиль пива: Безалгольное, 0% </p>

					<div class="flex justify-between items-center mt-4">
						<Button variant="default" class="text-base w-30 font-bold">
							Оценить
						</Button>
						<Button variant="outline" class="text-base w-30 font-bold">
							Любимое
						</Button>
					</div>
				</div>
				<div class="w-64 mt-8">
					<div class="flex justify-center p-6 bg-muted rounded-lg h-[260px]">
						<NuxtImg format="webp" src="/bear.png" alt="Logo" />
					</div>
					<div class="mt-4 flex gap-4">
						<div class="flex items-center gap-2">
							<Star color="#f3da0b" fill="#f3da0b" class="w-5" />
							<p>8.9</p>
						</div>
						<div class="flex items-center gap-2">
							<MessageSquare color="#353535" class="w-5 mt-1" />
							<p>27</p>
						</div>
					</div>
					<p class="mt-2 mb-2 text-2xl">Зеленый кайф</p>
					<p class="mb-4 text-xs text-secondary">Стиль пива: Безалгольное, 0% </p>

					<div class="flex justify-between items-center mt-4">
						<Button variant="default" class="text-base w-30 font-bold">
							Оценить
						</Button>
						<Button variant="outline" class="text-base w-30 font-bold">
							Любимое
						</Button>
					</div>
				</div>
				<div class="w-64 mt-8">
					<div class="flex justify-center p-6 bg-muted rounded-lg h-[260px]">
						<NuxtImg format="webp" src="/bear.png" alt="Logo" />
					</div>
					<div class="mt-4 flex gap-4">
						<div class="flex items-center gap-2">
							<Star color="#f3da0b" fill="#f3da0b" class="w-5" />
							<p>8.9</p>
						</div>
						<div class="flex items-center gap-2">
							<MessageSquare color="#353535" class="w-5 mt-1" />
							<p>27</p>
						</div>
					</div>
					<p class="mt-2 mb-2 text-2xl">Зеленый кайф</p>
					<p class="mb-4 text-xs text-secondary">Стиль пива: Безалгольное, 0% </p>

					<div class="flex justify-between items-center mt-4">
						<Button variant="default" class="text-base w-30 font-bold">
							Оценить
						</Button>
						<Button variant="outline" class="text-base w-30 font-bold">
							Любимое
						</Button>
					</div>
				</div>
				<div class="w-64 mt-8">
					<div class="flex justify-center p-6 bg-muted rounded-lg h-[260px]">
						<NuxtImg format="webp" src="/bear.png" alt="Logo" />
					</div>
					<div class="mt-4 flex gap-4">
						<div class="flex items-center gap-2">
							<Star color="#f3da0b" fill="#f3da0b" class="w-5" />
							<p>8.9</p>
						</div>
						<div class="flex items-center gap-2">
							<MessageSquare color="#353535" class="w-5 mt-1" />
							<p>27</p>
						</div>
					</div>
					<p class="mt-2 mb-2 text-2xl">Зеленый кайф</p>
					<p class="mb-4 text-xs text-secondary">Стиль пива: Безалгольное, 0% </p>

					<div class="flex justify-between items-center mt-4">
						<Button variant="default" class="text-base w-30 font-bold">
							Оценить
						</Button>
						<Button variant="outline" class="text-base w-30 font-bold">
							Любимое
						</Button>
					</div>
				</div>

		</div>	
	</div>
</template>
<script setup lang="ts">
	import { Star } from 'lucide-vue-next'
	import { MessageSquare } from 'lucide-vue-next';
</script>
