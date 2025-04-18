<template>
	<div class="container mt-20">
		<h1 class="text-[40px] font-nunito font-bold">Рекомендовано</h1>
			<div class="flex gap-10">
				<div class="w-64 mt-8">
					<div class="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
						<NuxtImg class="w-[215px] h-[215px]" format="webp" src="/bear.png" alt="Logo" />
					</div>
					<div class="mt-4 flex gap-2">
						<Star color="#f3da0b" fill="#f3da0b" class="w-5" />
						<p>8.9</p>
					</div>
					<p class="mt-2 mb-4 text-2xl">Зеленый кайф</p>
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
					<div class="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
						<NuxtImg class="w-[215px] h-[215px]" format="webp" src="/bear.png" alt="Logo" />
					</div>
					<div class="mt-4 flex gap-2">
						<Star color="#f3da0b" fill="#f3da0b" class="w-5" />
						<p>8.9</p>
					</div>
					<p class="mt-2 mb-4 text-2xl">Зеленый кайф</p>
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
					<div class="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
						<NuxtImg class="w-[215px] h-[215px]" format="webp" src="/bear.png" alt="Logo" />
					</div>
					<div class="mt-4 flex gap-2">
						<Star color="#f3da0b" fill="#f3da0b" class="w-5" />
						<p>8.9</p>
					</div>
					<p class="mt-2 mb-4 text-2xl">Зеленый кайф</p>
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
					<div class="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
						<NuxtImg class="w-[215px] h-[215px]" format="webp" src="/bear.png" alt="Logo" />
					</div>
					<div class="mt-4 flex gap-2">
						<Star color="#f3da0b" fill="#f3da0b" class="w-5" />
						<p>8.9</p>
					</div>
					<p class="mt-2 mb-4 text-2xl">Зеленый кайф</p>
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
</script>
