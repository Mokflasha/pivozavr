
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'BaseNavigation': typeof import("../components/BaseNavigation.vue")['default']
    'LoginForm': typeof import("../components/LoginForm.vue")['default']
    'LoginNavigation': typeof import("../components/LoginNavigation.vue")['default']
    'MostPopular': typeof import("../components/MostPopular.vue")['default']
    'Recomendation': typeof import("../components/Recomendation.vue")['default']
    'RegistrationForm': typeof import("../components/RegistrationForm.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
    'NuxtPicture': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
    'FormControl': typeof import("../components/ui/form/index")['FormControl']
    'FormDescription': typeof import("../components/ui/form/index")['FormDescription']
    'FormItem': typeof import("../components/ui/form/index")['FormItem']
    'FormLabel': typeof import("../components/ui/form/index")['FormLabel']
    'FormMessage': typeof import("../components/ui/form/index")['FormMessage']
    'FORMITEMINJECTIONKEY': typeof import("../components/ui/form/index")['FORM_ITEM_INJECTION_KEY']
    'Form': typeof import("../components/ui/form/index")['Form']
    'FormField': typeof import("../components/ui/form/index")['FormField']
    'FormFieldArray': typeof import("../components/ui/form/index")['FormFieldArray']
    'Button': typeof import("../components/ui/button/index")['Button']
    'Input': typeof import("../components/ui/input/index")['Input']
    'Label': typeof import("../components/ui/label/index")['Label']
    'LucideAArrowDown': typeof import("../node_modules/lucide-vue-next")['AArrowDown']
    'LucideAArrowUp': typeof import("../node_modules/lucide-vue-next")['AArrowUp']
    'LucideALargeSmall': typeof import("../node_modules/lucide-vue-next")['ALargeSmall']
    'LucideAccessibility': typeof import("../node_modules/lucide-vue-next")['Accessibility']
    'LucideActivity': typeof import("../node_modules/lucide-vue-next")['Activity']
    'LucideActivitySquare': typeof import("../node_modules/lucide-vue-next")['ActivitySquare']
    'LucideAirVent': typeof import("../node_modules/lucide-vue-next")['AirVent']
    'LucideAirplay': typeof import("../node_modules/lucide-vue-next")['Airplay']
    'LucideAlarmCheck': typeof import("../node_modules/lucide-vue-next")['AlarmCheck']
    'LucideAlarmClock': typeof import("../node_modules/lucide-vue-next")['AlarmClock']
    'LucideAlarmClockCheck': typeof import("../node_modules/lucide-vue-next")['AlarmClockCheck']
    'LucideAlarmClockMinus': typeof import("../node_modules/lucide-vue-next")['AlarmClockMinus']
    'LucideAlarmClockOff': typeof import("../node_modules/lucide-vue-next")['AlarmClockOff']
    'LucideAlarmClockPlus': typeof import("../node_modules/lucide-vue-next")['AlarmClockPlus']
    'LucideAlarmMinus': typeof import("../node_modules/lucide-vue-next")['AlarmMinus']
    'LucideAlarmPlus': typeof import("../node_modules/lucide-vue-next")['AlarmPlus']
    'LucideAlarmSmoke': typeof import("../node_modules/lucide-vue-next")['AlarmSmoke']
    'LucideAlbum': typeof import("../node_modules/lucide-vue-next")['Album']
    'LucideAlertCircle': typeof import("../node_modules/lucide-vue-next")['AlertCircle']
    'LucideAlertOctagon': typeof import("../node_modules/lucide-vue-next")['AlertOctagon']
    'LucideAlertTriangle': typeof import("../node_modules/lucide-vue-next")['AlertTriangle']
    'LucideAlignCenter': typeof import("../node_modules/lucide-vue-next")['AlignCenter']
    'LucideAlignCenterHorizontal': typeof import("../node_modules/lucide-vue-next")['AlignCenterHorizontal']
    'LucideAlignCenterVertical': typeof import("../node_modules/lucide-vue-next")['AlignCenterVertical']
    'LucideAlignEndHorizontal': typeof import("../node_modules/lucide-vue-next")['AlignEndHorizontal']
    'LucideAlignEndVertical': typeof import("../node_modules/lucide-vue-next")['AlignEndVertical']
    'LucideAlignHorizontalDistributeCenter': typeof import("../node_modules/lucide-vue-next")['AlignHorizontalDistributeCenter']
    'LucideAlignHorizontalDistributeEnd': typeof import("../node_modules/lucide-vue-next")['AlignHorizontalDistributeEnd']
    'LucideAlignHorizontalDistributeStart': typeof import("../node_modules/lucide-vue-next")['AlignHorizontalDistributeStart']
    'LucideAlignHorizontalJustifyCenter': typeof import("../node_modules/lucide-vue-next")['AlignHorizontalJustifyCenter']
    'LucideAlignHorizontalJustifyEnd': typeof import("../node_modules/lucide-vue-next")['AlignHorizontalJustifyEnd']
    'LucideAlignHorizontalJustifyStart': typeof import("../node_modules/lucide-vue-next")['AlignHorizontalJustifyStart']
    'LucideAlignHorizontalSpaceAround': typeof import("../node_modules/lucide-vue-next")['AlignHorizontalSpaceAround']
    'LucideAlignHorizontalSpaceBetween': typeof import("../node_modules/lucide-vue-next")['AlignHorizontalSpaceBetween']
    'LucideAlignJustify': typeof import("../node_modules/lucide-vue-next")['AlignJustify']
    'LucideAlignLeft': typeof import("../node_modules/lucide-vue-next")['AlignLeft']
    'LucideAlignRight': typeof import("../node_modules/lucide-vue-next")['AlignRight']
    'LucideAlignStartHorizontal': typeof import("../node_modules/lucide-vue-next")['AlignStartHorizontal']
    'LucideAlignStartVertical': typeof import("../node_modules/lucide-vue-next")['AlignStartVertical']
    'LucideAlignVerticalDistributeCenter': typeof import("../node_modules/lucide-vue-next")['AlignVerticalDistributeCenter']
    'LucideAlignVerticalDistributeEnd': typeof import("../node_modules/lucide-vue-next")['AlignVerticalDistributeEnd']
    'LucideAlignVerticalDistributeStart': typeof import("../node_modules/lucide-vue-next")['AlignVerticalDistributeStart']
    'LucideAlignVerticalJustifyCenter': typeof import("../node_modules/lucide-vue-next")['AlignVerticalJustifyCenter']
    'LucideAlignVerticalJustifyEnd': typeof import("../node_modules/lucide-vue-next")['AlignVerticalJustifyEnd']
    'LucideAlignVerticalJustifyStart': typeof import("../node_modules/lucide-vue-next")['AlignVerticalJustifyStart']
    'LucideAlignVerticalSpaceAround': typeof import("../node_modules/lucide-vue-next")['AlignVerticalSpaceAround']
    'LucideAlignVerticalSpaceBetween': typeof import("../node_modules/lucide-vue-next")['AlignVerticalSpaceBetween']
    'LucideAmbulance': typeof import("../node_modules/lucide-vue-next")['Ambulance']
    'LucideAmpersand': typeof import("../node_modules/lucide-vue-next")['Ampersand']
    'LucideAmpersands': typeof import("../node_modules/lucide-vue-next")['Ampersands']
    'LucideAmphora': typeof import("../node_modules/lucide-vue-next")['Amphora']
    'LucideAnchor': typeof import("../node_modules/lucide-vue-next")['Anchor']
    'LucideAngry': typeof import("../node_modules/lucide-vue-next")['Angry']
    'LucideAnnoyed': typeof import("../node_modules/lucide-vue-next")['Annoyed']
    'LucideAntenna': typeof import("../node_modules/lucide-vue-next")['Antenna']
    'LucideAnvil': typeof import("../node_modules/lucide-vue-next")['Anvil']
    'LucideAperture': typeof import("../node_modules/lucide-vue-next")['Aperture']
    'LucideAppWindow': typeof import("../node_modules/lucide-vue-next")['AppWindow']
    'LucideAppWindowMac': typeof import("../node_modules/lucide-vue-next")['AppWindowMac']
    'LucideApple': typeof import("../node_modules/lucide-vue-next")['Apple']
    'LucideArchive': typeof import("../node_modules/lucide-vue-next")['Archive']
    'LucideArchiveRestore': typeof import("../node_modules/lucide-vue-next")['ArchiveRestore']
    'LucideArchiveX': typeof import("../node_modules/lucide-vue-next")['ArchiveX']
    'LucideAreaChart': typeof import("../node_modules/lucide-vue-next")['AreaChart']
    'LucideArmchair': typeof import("../node_modules/lucide-vue-next")['Armchair']
    'LucideArrowBigDown': typeof import("../node_modules/lucide-vue-next")['ArrowBigDown']
    'LucideArrowBigDownDash': typeof import("../node_modules/lucide-vue-next")['ArrowBigDownDash']
    'LucideArrowBigLeft': typeof import("../node_modules/lucide-vue-next")['ArrowBigLeft']
    'LucideArrowBigLeftDash': typeof import("../node_modules/lucide-vue-next")['ArrowBigLeftDash']
    'LucideArrowBigRight': typeof import("../node_modules/lucide-vue-next")['ArrowBigRight']
    'LucideArrowBigRightDash': typeof import("../node_modules/lucide-vue-next")['ArrowBigRightDash']
    'LucideArrowBigUp': typeof import("../node_modules/lucide-vue-next")['ArrowBigUp']
    'LucideArrowBigUpDash': typeof import("../node_modules/lucide-vue-next")['ArrowBigUpDash']
    'LucideArrowDown': typeof import("../node_modules/lucide-vue-next")['ArrowDown']
    'LucideArrowDown01': typeof import("../node_modules/lucide-vue-next")['ArrowDown01']
    'LucideArrowDown10': typeof import("../node_modules/lucide-vue-next")['ArrowDown10']
    'LucideArrowDownAz': typeof import("../node_modules/lucide-vue-next")['ArrowDownAz']
    'LucideArrowDownCircle': typeof import("../node_modules/lucide-vue-next")['ArrowDownCircle']
    'LucideArrowDownFromLine': typeof import("../node_modules/lucide-vue-next")['ArrowDownFromLine']
    'LucideArrowDownLeft': typeof import("../node_modules/lucide-vue-next")['ArrowDownLeft']
    'LucideArrowDownLeftFromCircle': typeof import("../node_modules/lucide-vue-next")['ArrowDownLeftFromCircle']
    'LucideArrowDownLeftFromSquare': typeof import("../node_modules/lucide-vue-next")['ArrowDownLeftFromSquare']
    'LucideArrowDownLeftSquare': typeof import("../node_modules/lucide-vue-next")['ArrowDownLeftSquare']
    'LucideArrowDownNarrowWide': typeof import("../node_modules/lucide-vue-next")['ArrowDownNarrowWide']
    'LucideArrowDownRight': typeof import("../node_modules/lucide-vue-next")['ArrowDownRight']
    'LucideArrowDownRightFromCircle': typeof import("../node_modules/lucide-vue-next")['ArrowDownRightFromCircle']
    'LucideArrowDownRightFromSquare': typeof import("../node_modules/lucide-vue-next")['ArrowDownRightFromSquare']
    'LucideArrowDownRightSquare': typeof import("../node_modules/lucide-vue-next")['ArrowDownRightSquare']
    'LucideArrowDownSquare': typeof import("../node_modules/lucide-vue-next")['ArrowDownSquare']
    'LucideArrowDownToDot': typeof import("../node_modules/lucide-vue-next")['ArrowDownToDot']
    'LucideArrowDownToLine': typeof import("../node_modules/lucide-vue-next")['ArrowDownToLine']
    'LucideArrowDownUp': typeof import("../node_modules/lucide-vue-next")['ArrowDownUp']
    'LucideArrowDownWideNarrow': typeof import("../node_modules/lucide-vue-next")['ArrowDownWideNarrow']
    'LucideArrowDownZa': typeof import("../node_modules/lucide-vue-next")['ArrowDownZa']
    'LucideArrowLeft': typeof import("../node_modules/lucide-vue-next")['ArrowLeft']
    'LucideArrowLeftCircle': typeof import("../node_modules/lucide-vue-next")['ArrowLeftCircle']
    'LucideArrowLeftFromLine': typeof import("../node_modules/lucide-vue-next")['ArrowLeftFromLine']
    'LucideArrowLeftRight': typeof import("../node_modules/lucide-vue-next")['ArrowLeftRight']
    'LucideArrowLeftSquare': typeof import("../node_modules/lucide-vue-next")['ArrowLeftSquare']
    'LucideArrowLeftToLine': typeof import("../node_modules/lucide-vue-next")['ArrowLeftToLine']
    'LucideArrowRight': typeof import("../node_modules/lucide-vue-next")['ArrowRight']
    'LucideArrowRightCircle': typeof import("../node_modules/lucide-vue-next")['ArrowRightCircle']
    'LucideArrowRightFromLine': typeof import("../node_modules/lucide-vue-next")['ArrowRightFromLine']
    'LucideArrowRightLeft': typeof import("../node_modules/lucide-vue-next")['ArrowRightLeft']
    'LucideArrowRightSquare': typeof import("../node_modules/lucide-vue-next")['ArrowRightSquare']
    'LucideArrowRightToLine': typeof import("../node_modules/lucide-vue-next")['ArrowRightToLine']
    'LucideArrowUp': typeof import("../node_modules/lucide-vue-next")['ArrowUp']
    'LucideArrowUp01': typeof import("../node_modules/lucide-vue-next")['ArrowUp01']
    'LucideArrowUp10': typeof import("../node_modules/lucide-vue-next")['ArrowUp10']
    'LucideArrowUpAz': typeof import("../node_modules/lucide-vue-next")['ArrowUpAz']
    'LucideArrowUpCircle': typeof import("../node_modules/lucide-vue-next")['ArrowUpCircle']
    'LucideArrowUpDown': typeof import("../node_modules/lucide-vue-next")['ArrowUpDown']
    'LucideArrowUpFromDot': typeof import("../node_modules/lucide-vue-next")['ArrowUpFromDot']
    'LucideArrowUpFromLine': typeof import("../node_modules/lucide-vue-next")['ArrowUpFromLine']
    'LucideArrowUpLeft': typeof import("../node_modules/lucide-vue-next")['ArrowUpLeft']
    'LucideArrowUpLeftFromCircle': typeof import("../node_modules/lucide-vue-next")['ArrowUpLeftFromCircle']
    'LucideArrowUpLeftFromSquare': typeof import("../node_modules/lucide-vue-next")['ArrowUpLeftFromSquare']
    'LucideArrowUpLeftSquare': typeof import("../node_modules/lucide-vue-next")['ArrowUpLeftSquare']
    'LucideArrowUpNarrowWide': typeof import("../node_modules/lucide-vue-next")['ArrowUpNarrowWide']
    'LucideArrowUpRight': typeof import("../node_modules/lucide-vue-next")['ArrowUpRight']
    'LucideArrowUpRightFromCircle': typeof import("../node_modules/lucide-vue-next")['ArrowUpRightFromCircle']
    'LucideArrowUpRightFromSquare': typeof import("../node_modules/lucide-vue-next")['ArrowUpRightFromSquare']
    'LucideArrowUpRightSquare': typeof import("../node_modules/lucide-vue-next")['ArrowUpRightSquare']
    'LucideArrowUpSquare': typeof import("../node_modules/lucide-vue-next")['ArrowUpSquare']
    'LucideArrowUpToLine': typeof import("../node_modules/lucide-vue-next")['ArrowUpToLine']
    'LucideArrowUpWideNarrow': typeof import("../node_modules/lucide-vue-next")['ArrowUpWideNarrow']
    'LucideArrowUpZa': typeof import("../node_modules/lucide-vue-next")['ArrowUpZa']
    'LucideArrowsUpFromLine': typeof import("../node_modules/lucide-vue-next")['ArrowsUpFromLine']
    'LucideAsterisk': typeof import("../node_modules/lucide-vue-next")['Asterisk']
    'LucideAsteriskSquare': typeof import("../node_modules/lucide-vue-next")['AsteriskSquare']
    'LucideAtSign': typeof import("../node_modules/lucide-vue-next")['AtSign']
    'LucideAtom': typeof import("../node_modules/lucide-vue-next")['Atom']
    'LucideAudioLines': typeof import("../node_modules/lucide-vue-next")['AudioLines']
    'LucideAudioWaveform': typeof import("../node_modules/lucide-vue-next")['AudioWaveform']
    'LucideAward': typeof import("../node_modules/lucide-vue-next")['Award']
    'LucideAxe': typeof import("../node_modules/lucide-vue-next")['Axe']
    'LucideAxis3d': typeof import("../node_modules/lucide-vue-next")['Axis3d']
    'LucideBaby': typeof import("../node_modules/lucide-vue-next")['Baby']
    'LucideBackpack': typeof import("../node_modules/lucide-vue-next")['Backpack']
    'LucideBadge': typeof import("../node_modules/lucide-vue-next")['Badge']
    'LucideBadgeAlert': typeof import("../node_modules/lucide-vue-next")['BadgeAlert']
    'LucideBadgeCent': typeof import("../node_modules/lucide-vue-next")['BadgeCent']
    'LucideBadgeCheck': typeof import("../node_modules/lucide-vue-next")['BadgeCheck']
    'LucideBadgeDollarSign': typeof import("../node_modules/lucide-vue-next")['BadgeDollarSign']
    'LucideBadgeEuro': typeof import("../node_modules/lucide-vue-next")['BadgeEuro']
    'LucideBadgeHelp': typeof import("../node_modules/lucide-vue-next")['BadgeHelp']
    'LucideBadgeIndianRupee': typeof import("../node_modules/lucide-vue-next")['BadgeIndianRupee']
    'LucideBadgeInfo': typeof import("../node_modules/lucide-vue-next")['BadgeInfo']
    'LucideBadgeJapaneseYen': typeof import("../node_modules/lucide-vue-next")['BadgeJapaneseYen']
    'LucideBadgeMinus': typeof import("../node_modules/lucide-vue-next")['BadgeMinus']
    'LucideBadgePercent': typeof import("../node_modules/lucide-vue-next")['BadgePercent']
    'LucideBadgePlus': typeof import("../node_modules/lucide-vue-next")['BadgePlus']
    'LucideBadgePoundSterling': typeof import("../node_modules/lucide-vue-next")['BadgePoundSterling']
    'LucideBadgeRussianRuble': typeof import("../node_modules/lucide-vue-next")['BadgeRussianRuble']
    'LucideBadgeSwissFranc': typeof import("../node_modules/lucide-vue-next")['BadgeSwissFranc']
    'LucideBadgeX': typeof import("../node_modules/lucide-vue-next")['BadgeX']
    'LucideBaggageClaim': typeof import("../node_modules/lucide-vue-next")['BaggageClaim']
    'LucideBan': typeof import("../node_modules/lucide-vue-next")['Ban']
    'LucideBanana': typeof import("../node_modules/lucide-vue-next")['Banana']
    'LucideBandage': typeof import("../node_modules/lucide-vue-next")['Bandage']
    'LucideBanknote': typeof import("../node_modules/lucide-vue-next")['Banknote']
    'LucideBanknoteArrowDown': typeof import("../node_modules/lucide-vue-next")['BanknoteArrowDown']
    'LucideBanknoteArrowUp': typeof import("../node_modules/lucide-vue-next")['BanknoteArrowUp']
    'LucideBanknoteX': typeof import("../node_modules/lucide-vue-next")['BanknoteX']
    'LucideBarChart': typeof import("../node_modules/lucide-vue-next")['BarChart']
    'LucideBarChart2': typeof import("../node_modules/lucide-vue-next")['BarChart2']
    'LucideBarChart3': typeof import("../node_modules/lucide-vue-next")['BarChart3']
    'LucideBarChart4': typeof import("../node_modules/lucide-vue-next")['BarChart4']
    'LucideBarChartBig': typeof import("../node_modules/lucide-vue-next")['BarChartBig']
    'LucideBarChartHorizontal': typeof import("../node_modules/lucide-vue-next")['BarChartHorizontal']
    'LucideBarChartHorizontalBig': typeof import("../node_modules/lucide-vue-next")['BarChartHorizontalBig']
    'LucideBarcode': typeof import("../node_modules/lucide-vue-next")['Barcode']
    'LucideBaseline': typeof import("../node_modules/lucide-vue-next")['Baseline']
    'LucideBath': typeof import("../node_modules/lucide-vue-next")['Bath']
    'LucideBattery': typeof import("../node_modules/lucide-vue-next")['Battery']
    'LucideBatteryCharging': typeof import("../node_modules/lucide-vue-next")['BatteryCharging']
    'LucideBatteryFull': typeof import("../node_modules/lucide-vue-next")['BatteryFull']
    'LucideBatteryLow': typeof import("../node_modules/lucide-vue-next")['BatteryLow']
    'LucideBatteryMedium': typeof import("../node_modules/lucide-vue-next")['BatteryMedium']
    'LucideBatteryPlus': typeof import("../node_modules/lucide-vue-next")['BatteryPlus']
    'LucideBatteryWarning': typeof import("../node_modules/lucide-vue-next")['BatteryWarning']
    'LucideBeaker': typeof import("../node_modules/lucide-vue-next")['Beaker']
    'LucideBean': typeof import("../node_modules/lucide-vue-next")['Bean']
    'LucideBeanOff': typeof import("../node_modules/lucide-vue-next")['BeanOff']
    'LucideBed': typeof import("../node_modules/lucide-vue-next")['Bed']
    'LucideBedDouble': typeof import("../node_modules/lucide-vue-next")['BedDouble']
    'LucideBedSingle': typeof import("../node_modules/lucide-vue-next")['BedSingle']
    'LucideBeef': typeof import("../node_modules/lucide-vue-next")['Beef']
    'LucideBeer': typeof import("../node_modules/lucide-vue-next")['Beer']
    'LucideBeerOff': typeof import("../node_modules/lucide-vue-next")['BeerOff']
    'LucideBell': typeof import("../node_modules/lucide-vue-next")['Bell']
    'LucideBellDot': typeof import("../node_modules/lucide-vue-next")['BellDot']
    'LucideBellElectric': typeof import("../node_modules/lucide-vue-next")['BellElectric']
    'LucideBellMinus': typeof import("../node_modules/lucide-vue-next")['BellMinus']
    'LucideBellOff': typeof import("../node_modules/lucide-vue-next")['BellOff']
    'LucideBellPlus': typeof import("../node_modules/lucide-vue-next")['BellPlus']
    'LucideBellRing': typeof import("../node_modules/lucide-vue-next")['BellRing']
    'LucideBetweenHorizonalEnd': typeof import("../node_modules/lucide-vue-next")['BetweenHorizonalEnd']
    'LucideBetweenHorizonalStart': typeof import("../node_modules/lucide-vue-next")['BetweenHorizonalStart']
    'LucideBetweenHorizontalEnd': typeof import("../node_modules/lucide-vue-next")['BetweenHorizontalEnd']
    'LucideBetweenHorizontalStart': typeof import("../node_modules/lucide-vue-next")['BetweenHorizontalStart']
    'LucideBetweenVerticalEnd': typeof import("../node_modules/lucide-vue-next")['BetweenVerticalEnd']
    'LucideBetweenVerticalStart': typeof import("../node_modules/lucide-vue-next")['BetweenVerticalStart']
    'LucideBicepsFlexed': typeof import("../node_modules/lucide-vue-next")['BicepsFlexed']
    'LucideBike': typeof import("../node_modules/lucide-vue-next")['Bike']
    'LucideBinary': typeof import("../node_modules/lucide-vue-next")['Binary']
    'LucideBinoculars': typeof import("../node_modules/lucide-vue-next")['Binoculars']
    'LucideBiohazard': typeof import("../node_modules/lucide-vue-next")['Biohazard']
    'LucideBird': typeof import("../node_modules/lucide-vue-next")['Bird']
    'LucideBitcoin': typeof import("../node_modules/lucide-vue-next")['Bitcoin']
    'LucideBlend': typeof import("../node_modules/lucide-vue-next")['Blend']
    'LucideBlinds': typeof import("../node_modules/lucide-vue-next")['Blinds']
    'LucideBlocks': typeof import("../node_modules/lucide-vue-next")['Blocks']
    'LucideBluetooth': typeof import("../node_modules/lucide-vue-next")['Bluetooth']
    'LucideBluetoothConnected': typeof import("../node_modules/lucide-vue-next")['BluetoothConnected']
    'LucideBluetoothOff': typeof import("../node_modules/lucide-vue-next")['BluetoothOff']
    'LucideBluetoothSearching': typeof import("../node_modules/lucide-vue-next")['BluetoothSearching']
    'LucideBold': typeof import("../node_modules/lucide-vue-next")['Bold']
    'LucideBolt': typeof import("../node_modules/lucide-vue-next")['Bolt']
    'LucideBomb': typeof import("../node_modules/lucide-vue-next")['Bomb']
    'LucideBone': typeof import("../node_modules/lucide-vue-next")['Bone']
    'LucideBook': typeof import("../node_modules/lucide-vue-next")['Book']
    'LucideBookA': typeof import("../node_modules/lucide-vue-next")['BookA']
    'LucideBookAudio': typeof import("../node_modules/lucide-vue-next")['BookAudio']
    'LucideBookCheck': typeof import("../node_modules/lucide-vue-next")['BookCheck']
    'LucideBookCopy': typeof import("../node_modules/lucide-vue-next")['BookCopy']
    'LucideBookDashed': typeof import("../node_modules/lucide-vue-next")['BookDashed']
    'LucideBookDown': typeof import("../node_modules/lucide-vue-next")['BookDown']
    'LucideBookHeadphones': typeof import("../node_modules/lucide-vue-next")['BookHeadphones']
    'LucideBookHeart': typeof import("../node_modules/lucide-vue-next")['BookHeart']
    'LucideBookImage': typeof import("../node_modules/lucide-vue-next")['BookImage']
    'LucideBookKey': typeof import("../node_modules/lucide-vue-next")['BookKey']
    'LucideBookLock': typeof import("../node_modules/lucide-vue-next")['BookLock']
    'LucideBookMarked': typeof import("../node_modules/lucide-vue-next")['BookMarked']
    'LucideBookMinus': typeof import("../node_modules/lucide-vue-next")['BookMinus']
    'LucideBookOpen': typeof import("../node_modules/lucide-vue-next")['BookOpen']
    'LucideBookOpenCheck': typeof import("../node_modules/lucide-vue-next")['BookOpenCheck']
    'LucideBookOpenText': typeof import("../node_modules/lucide-vue-next")['BookOpenText']
    'LucideBookPlus': typeof import("../node_modules/lucide-vue-next")['BookPlus']
    'LucideBookTemplate': typeof import("../node_modules/lucide-vue-next")['BookTemplate']
    'LucideBookText': typeof import("../node_modules/lucide-vue-next")['BookText']
    'LucideBookType': typeof import("../node_modules/lucide-vue-next")['BookType']
    'LucideBookUp': typeof import("../node_modules/lucide-vue-next")['BookUp']
    'LucideBookUp2': typeof import("../node_modules/lucide-vue-next")['BookUp2']
    'LucideBookUser': typeof import("../node_modules/lucide-vue-next")['BookUser']
    'LucideBookX': typeof import("../node_modules/lucide-vue-next")['BookX']
    'LucideBookmark': typeof import("../node_modules/lucide-vue-next")['Bookmark']
    'LucideBookmarkCheck': typeof import("../node_modules/lucide-vue-next")['BookmarkCheck']
    'LucideBookmarkMinus': typeof import("../node_modules/lucide-vue-next")['BookmarkMinus']
    'LucideBookmarkPlus': typeof import("../node_modules/lucide-vue-next")['BookmarkPlus']
    'LucideBookmarkX': typeof import("../node_modules/lucide-vue-next")['BookmarkX']
    'LucideBoomBox': typeof import("../node_modules/lucide-vue-next")['BoomBox']
    'LucideBot': typeof import("../node_modules/lucide-vue-next")['Bot']
    'LucideBotMessageSquare': typeof import("../node_modules/lucide-vue-next")['BotMessageSquare']
    'LucideBotOff': typeof import("../node_modules/lucide-vue-next")['BotOff']
    'LucideBox': typeof import("../node_modules/lucide-vue-next")['Box']
    'LucideBoxSelect': typeof import("../node_modules/lucide-vue-next")['BoxSelect']
    'LucideBoxes': typeof import("../node_modules/lucide-vue-next")['Boxes']
    'LucideBraces': typeof import("../node_modules/lucide-vue-next")['Braces']
    'LucideBrackets': typeof import("../node_modules/lucide-vue-next")['Brackets']
    'LucideBrain': typeof import("../node_modules/lucide-vue-next")['Brain']
    'LucideBrainCircuit': typeof import("../node_modules/lucide-vue-next")['BrainCircuit']
    'LucideBrainCog': typeof import("../node_modules/lucide-vue-next")['BrainCog']
    'LucideBrickWall': typeof import("../node_modules/lucide-vue-next")['BrickWall']
    'LucideBriefcase': typeof import("../node_modules/lucide-vue-next")['Briefcase']
    'LucideBriefcaseBusiness': typeof import("../node_modules/lucide-vue-next")['BriefcaseBusiness']
    'LucideBriefcaseConveyorBelt': typeof import("../node_modules/lucide-vue-next")['BriefcaseConveyorBelt']
    'LucideBriefcaseMedical': typeof import("../node_modules/lucide-vue-next")['BriefcaseMedical']
    'LucideBringToFront': typeof import("../node_modules/lucide-vue-next")['BringToFront']
    'LucideBrush': typeof import("../node_modules/lucide-vue-next")['Brush']
    'LucideBug': typeof import("../node_modules/lucide-vue-next")['Bug']
    'LucideBugOff': typeof import("../node_modules/lucide-vue-next")['BugOff']
    'LucideBugPlay': typeof import("../node_modules/lucide-vue-next")['BugPlay']
    'LucideBuilding': typeof import("../node_modules/lucide-vue-next")['Building']
    'LucideBuilding2': typeof import("../node_modules/lucide-vue-next")['Building2']
    'LucideBus': typeof import("../node_modules/lucide-vue-next")['Bus']
    'LucideBusFront': typeof import("../node_modules/lucide-vue-next")['BusFront']
    'LucideCable': typeof import("../node_modules/lucide-vue-next")['Cable']
    'LucideCableCar': typeof import("../node_modules/lucide-vue-next")['CableCar']
    'LucideCake': typeof import("../node_modules/lucide-vue-next")['Cake']
    'LucideCakeSlice': typeof import("../node_modules/lucide-vue-next")['CakeSlice']
    'LucideCalculator': typeof import("../node_modules/lucide-vue-next")['Calculator']
    'LucideCalendar': typeof import("../node_modules/lucide-vue-next")['Calendar']
    'LucideCalendar1': typeof import("../node_modules/lucide-vue-next")['Calendar1']
    'LucideCalendarArrowDown': typeof import("../node_modules/lucide-vue-next")['CalendarArrowDown']
    'LucideCalendarArrowUp': typeof import("../node_modules/lucide-vue-next")['CalendarArrowUp']
    'LucideCalendarCheck': typeof import("../node_modules/lucide-vue-next")['CalendarCheck']
    'LucideCalendarCheck2': typeof import("../node_modules/lucide-vue-next")['CalendarCheck2']
    'LucideCalendarClock': typeof import("../node_modules/lucide-vue-next")['CalendarClock']
    'LucideCalendarCog': typeof import("../node_modules/lucide-vue-next")['CalendarCog']
    'LucideCalendarDays': typeof import("../node_modules/lucide-vue-next")['CalendarDays']
    'LucideCalendarFold': typeof import("../node_modules/lucide-vue-next")['CalendarFold']
    'LucideCalendarHeart': typeof import("../node_modules/lucide-vue-next")['CalendarHeart']
    'LucideCalendarMinus': typeof import("../node_modules/lucide-vue-next")['CalendarMinus']
    'LucideCalendarMinus2': typeof import("../node_modules/lucide-vue-next")['CalendarMinus2']
    'LucideCalendarOff': typeof import("../node_modules/lucide-vue-next")['CalendarOff']
    'LucideCalendarPlus': typeof import("../node_modules/lucide-vue-next")['CalendarPlus']
    'LucideCalendarPlus2': typeof import("../node_modules/lucide-vue-next")['CalendarPlus2']
    'LucideCalendarRange': typeof import("../node_modules/lucide-vue-next")['CalendarRange']
    'LucideCalendarSearch': typeof import("../node_modules/lucide-vue-next")['CalendarSearch']
    'LucideCalendarSync': typeof import("../node_modules/lucide-vue-next")['CalendarSync']
    'LucideCalendarX': typeof import("../node_modules/lucide-vue-next")['CalendarX']
    'LucideCalendarX2': typeof import("../node_modules/lucide-vue-next")['CalendarX2']
    'LucideCamera': typeof import("../node_modules/lucide-vue-next")['Camera']
    'LucideCameraOff': typeof import("../node_modules/lucide-vue-next")['CameraOff']
    'LucideCandlestickChart': typeof import("../node_modules/lucide-vue-next")['CandlestickChart']
    'LucideCandy': typeof import("../node_modules/lucide-vue-next")['Candy']
    'LucideCandyCane': typeof import("../node_modules/lucide-vue-next")['CandyCane']
    'LucideCandyOff': typeof import("../node_modules/lucide-vue-next")['CandyOff']
    'LucideCannabis': typeof import("../node_modules/lucide-vue-next")['Cannabis']
    'LucideCaptions': typeof import("../node_modules/lucide-vue-next")['Captions']
    'LucideCaptionsOff': typeof import("../node_modules/lucide-vue-next")['CaptionsOff']
    'LucideCar': typeof import("../node_modules/lucide-vue-next")['Car']
    'LucideCarFront': typeof import("../node_modules/lucide-vue-next")['CarFront']
    'LucideCarTaxiFront': typeof import("../node_modules/lucide-vue-next")['CarTaxiFront']
    'LucideCaravan': typeof import("../node_modules/lucide-vue-next")['Caravan']
    'LucideCarrot': typeof import("../node_modules/lucide-vue-next")['Carrot']
    'LucideCaseLower': typeof import("../node_modules/lucide-vue-next")['CaseLower']
    'LucideCaseSensitive': typeof import("../node_modules/lucide-vue-next")['CaseSensitive']
    'LucideCaseUpper': typeof import("../node_modules/lucide-vue-next")['CaseUpper']
    'LucideCassetteTape': typeof import("../node_modules/lucide-vue-next")['CassetteTape']
    'LucideCast': typeof import("../node_modules/lucide-vue-next")['Cast']
    'LucideCastle': typeof import("../node_modules/lucide-vue-next")['Castle']
    'LucideCat': typeof import("../node_modules/lucide-vue-next")['Cat']
    'LucideCctv': typeof import("../node_modules/lucide-vue-next")['Cctv']
    'LucideChartArea': typeof import("../node_modules/lucide-vue-next")['ChartArea']
    'LucideChartBar': typeof import("../node_modules/lucide-vue-next")['ChartBar']
    'LucideChartBarBig': typeof import("../node_modules/lucide-vue-next")['ChartBarBig']
    'LucideChartBarDecreasing': typeof import("../node_modules/lucide-vue-next")['ChartBarDecreasing']
    'LucideChartBarIncreasing': typeof import("../node_modules/lucide-vue-next")['ChartBarIncreasing']
    'LucideChartBarStacked': typeof import("../node_modules/lucide-vue-next")['ChartBarStacked']
    'LucideChartCandlestick': typeof import("../node_modules/lucide-vue-next")['ChartCandlestick']
    'LucideChartColumn': typeof import("../node_modules/lucide-vue-next")['ChartColumn']
    'LucideChartColumnBig': typeof import("../node_modules/lucide-vue-next")['ChartColumnBig']
    'LucideChartColumnDecreasing': typeof import("../node_modules/lucide-vue-next")['ChartColumnDecreasing']
    'LucideChartColumnIncreasing': typeof import("../node_modules/lucide-vue-next")['ChartColumnIncreasing']
    'LucideChartColumnStacked': typeof import("../node_modules/lucide-vue-next")['ChartColumnStacked']
    'LucideChartGantt': typeof import("../node_modules/lucide-vue-next")['ChartGantt']
    'LucideChartLine': typeof import("../node_modules/lucide-vue-next")['ChartLine']
    'LucideChartNetwork': typeof import("../node_modules/lucide-vue-next")['ChartNetwork']
    'LucideChartNoAxesColumn': typeof import("../node_modules/lucide-vue-next")['ChartNoAxesColumn']
    'LucideChartNoAxesColumnDecreasing': typeof import("../node_modules/lucide-vue-next")['ChartNoAxesColumnDecreasing']
    'LucideChartNoAxesColumnIncreasing': typeof import("../node_modules/lucide-vue-next")['ChartNoAxesColumnIncreasing']
    'LucideChartNoAxesCombined': typeof import("../node_modules/lucide-vue-next")['ChartNoAxesCombined']
    'LucideChartNoAxesGantt': typeof import("../node_modules/lucide-vue-next")['ChartNoAxesGantt']
    'LucideChartPie': typeof import("../node_modules/lucide-vue-next")['ChartPie']
    'LucideChartScatter': typeof import("../node_modules/lucide-vue-next")['ChartScatter']
    'LucideChartSpline': typeof import("../node_modules/lucide-vue-next")['ChartSpline']
    'LucideCheck': typeof import("../node_modules/lucide-vue-next")['Check']
    'LucideCheckCheck': typeof import("../node_modules/lucide-vue-next")['CheckCheck']
    'LucideCheckCircle': typeof import("../node_modules/lucide-vue-next")['CheckCircle']
    'LucideCheckCircle2': typeof import("../node_modules/lucide-vue-next")['CheckCircle2']
    'LucideCheckSquare': typeof import("../node_modules/lucide-vue-next")['CheckSquare']
    'LucideCheckSquare2': typeof import("../node_modules/lucide-vue-next")['CheckSquare2']
    'LucideChefHat': typeof import("../node_modules/lucide-vue-next")['ChefHat']
    'LucideCherry': typeof import("../node_modules/lucide-vue-next")['Cherry']
    'LucideChevronDown': typeof import("../node_modules/lucide-vue-next")['ChevronDown']
    'LucideChevronDownCircle': typeof import("../node_modules/lucide-vue-next")['ChevronDownCircle']
    'LucideChevronDownSquare': typeof import("../node_modules/lucide-vue-next")['ChevronDownSquare']
    'LucideChevronFirst': typeof import("../node_modules/lucide-vue-next")['ChevronFirst']
    'LucideChevronLast': typeof import("../node_modules/lucide-vue-next")['ChevronLast']
    'LucideChevronLeft': typeof import("../node_modules/lucide-vue-next")['ChevronLeft']
    'LucideChevronLeftCircle': typeof import("../node_modules/lucide-vue-next")['ChevronLeftCircle']
    'LucideChevronLeftSquare': typeof import("../node_modules/lucide-vue-next")['ChevronLeftSquare']
    'LucideChevronRight': typeof import("../node_modules/lucide-vue-next")['ChevronRight']
    'LucideChevronRightCircle': typeof import("../node_modules/lucide-vue-next")['ChevronRightCircle']
    'LucideChevronRightSquare': typeof import("../node_modules/lucide-vue-next")['ChevronRightSquare']
    'LucideChevronUp': typeof import("../node_modules/lucide-vue-next")['ChevronUp']
    'LucideChevronUpCircle': typeof import("../node_modules/lucide-vue-next")['ChevronUpCircle']
    'LucideChevronUpSquare': typeof import("../node_modules/lucide-vue-next")['ChevronUpSquare']
    'LucideChevronsDown': typeof import("../node_modules/lucide-vue-next")['ChevronsDown']
    'LucideChevronsDownUp': typeof import("../node_modules/lucide-vue-next")['ChevronsDownUp']
    'LucideChevronsLeft': typeof import("../node_modules/lucide-vue-next")['ChevronsLeft']
    'LucideChevronsLeftRight': typeof import("../node_modules/lucide-vue-next")['ChevronsLeftRight']
    'LucideChevronsLeftRightEllipsis': typeof import("../node_modules/lucide-vue-next")['ChevronsLeftRightEllipsis']
    'LucideChevronsRight': typeof import("../node_modules/lucide-vue-next")['ChevronsRight']
    'LucideChevronsRightLeft': typeof import("../node_modules/lucide-vue-next")['ChevronsRightLeft']
    'LucideChevronsUp': typeof import("../node_modules/lucide-vue-next")['ChevronsUp']
    'LucideChevronsUpDown': typeof import("../node_modules/lucide-vue-next")['ChevronsUpDown']
    'LucideChrome': typeof import("../node_modules/lucide-vue-next")['Chrome']
    'LucideChurch': typeof import("../node_modules/lucide-vue-next")['Church']
    'LucideCigarette': typeof import("../node_modules/lucide-vue-next")['Cigarette']
    'LucideCigaretteOff': typeof import("../node_modules/lucide-vue-next")['CigaretteOff']
    'LucideCircle': typeof import("../node_modules/lucide-vue-next")['Circle']
    'LucideCircleAlert': typeof import("../node_modules/lucide-vue-next")['CircleAlert']
    'LucideCircleArrowDown': typeof import("../node_modules/lucide-vue-next")['CircleArrowDown']
    'LucideCircleArrowLeft': typeof import("../node_modules/lucide-vue-next")['CircleArrowLeft']
    'LucideCircleArrowOutDownLeft': typeof import("../node_modules/lucide-vue-next")['CircleArrowOutDownLeft']
    'LucideCircleArrowOutDownRight': typeof import("../node_modules/lucide-vue-next")['CircleArrowOutDownRight']
    'LucideCircleArrowOutUpLeft': typeof import("../node_modules/lucide-vue-next")['CircleArrowOutUpLeft']
    'LucideCircleArrowOutUpRight': typeof import("../node_modules/lucide-vue-next")['CircleArrowOutUpRight']
    'LucideCircleArrowRight': typeof import("../node_modules/lucide-vue-next")['CircleArrowRight']
    'LucideCircleArrowUp': typeof import("../node_modules/lucide-vue-next")['CircleArrowUp']
    'LucideCircleCheck': typeof import("../node_modules/lucide-vue-next")['CircleCheck']
    'LucideCircleCheckBig': typeof import("../node_modules/lucide-vue-next")['CircleCheckBig']
    'LucideCircleChevronDown': typeof import("../node_modules/lucide-vue-next")['CircleChevronDown']
    'LucideCircleChevronLeft': typeof import("../node_modules/lucide-vue-next")['CircleChevronLeft']
    'LucideCircleChevronRight': typeof import("../node_modules/lucide-vue-next")['CircleChevronRight']
    'LucideCircleChevronUp': typeof import("../node_modules/lucide-vue-next")['CircleChevronUp']
    'LucideCircleDashed': typeof import("../node_modules/lucide-vue-next")['CircleDashed']
    'LucideCircleDivide': typeof import("../node_modules/lucide-vue-next")['CircleDivide']
    'LucideCircleDollarSign': typeof import("../node_modules/lucide-vue-next")['CircleDollarSign']
    'LucideCircleDot': typeof import("../node_modules/lucide-vue-next")['CircleDot']
    'LucideCircleDotDashed': typeof import("../node_modules/lucide-vue-next")['CircleDotDashed']
    'LucideCircleEllipsis': typeof import("../node_modules/lucide-vue-next")['CircleEllipsis']
    'LucideCircleEqual': typeof import("../node_modules/lucide-vue-next")['CircleEqual']
    'LucideCircleFadingArrowUp': typeof import("../node_modules/lucide-vue-next")['CircleFadingArrowUp']
    'LucideCircleFadingPlus': typeof import("../node_modules/lucide-vue-next")['CircleFadingPlus']
    'LucideCircleGauge': typeof import("../node_modules/lucide-vue-next")['CircleGauge']
    'LucideCircleHelp': typeof import("../node_modules/lucide-vue-next")['CircleHelp']
    'LucideCircleMinus': typeof import("../node_modules/lucide-vue-next")['CircleMinus']
    'LucideCircleOff': typeof import("../node_modules/lucide-vue-next")['CircleOff']
    'LucideCircleParking': typeof import("../node_modules/lucide-vue-next")['CircleParking']
    'LucideCircleParkingOff': typeof import("../node_modules/lucide-vue-next")['CircleParkingOff']
    'LucideCirclePause': typeof import("../node_modules/lucide-vue-next")['CirclePause']
    'LucideCirclePercent': typeof import("../node_modules/lucide-vue-next")['CirclePercent']
    'LucideCirclePlay': typeof import("../node_modules/lucide-vue-next")['CirclePlay']
    'LucideCirclePlus': typeof import("../node_modules/lucide-vue-next")['CirclePlus']
    'LucideCirclePower': typeof import("../node_modules/lucide-vue-next")['CirclePower']
    'LucideCircleSlash': typeof import("../node_modules/lucide-vue-next")['CircleSlash']
    'LucideCircleSlash2': typeof import("../node_modules/lucide-vue-next")['CircleSlash2']
    'LucideCircleSlashed': typeof import("../node_modules/lucide-vue-next")['CircleSlashed']
    'LucideCircleSmall': typeof import("../node_modules/lucide-vue-next")['CircleSmall']
    'LucideCircleStop': typeof import("../node_modules/lucide-vue-next")['CircleStop']
    'LucideCircleUser': typeof import("../node_modules/lucide-vue-next")['CircleUser']
    'LucideCircleUserRound': typeof import("../node_modules/lucide-vue-next")['CircleUserRound']
    'LucideCircleX': typeof import("../node_modules/lucide-vue-next")['CircleX']
    'LucideCircuitBoard': typeof import("../node_modules/lucide-vue-next")['CircuitBoard']
    'LucideCitrus': typeof import("../node_modules/lucide-vue-next")['Citrus']
    'LucideClapperboard': typeof import("../node_modules/lucide-vue-next")['Clapperboard']
    'LucideClipboard': typeof import("../node_modules/lucide-vue-next")['Clipboard']
    'LucideClipboardCheck': typeof import("../node_modules/lucide-vue-next")['ClipboardCheck']
    'LucideClipboardCopy': typeof import("../node_modules/lucide-vue-next")['ClipboardCopy']
    'LucideClipboardEdit': typeof import("../node_modules/lucide-vue-next")['ClipboardEdit']
    'LucideClipboardList': typeof import("../node_modules/lucide-vue-next")['ClipboardList']
    'LucideClipboardMinus': typeof import("../node_modules/lucide-vue-next")['ClipboardMinus']
    'LucideClipboardPaste': typeof import("../node_modules/lucide-vue-next")['ClipboardPaste']
    'LucideClipboardPen': typeof import("../node_modules/lucide-vue-next")['ClipboardPen']
    'LucideClipboardPenLine': typeof import("../node_modules/lucide-vue-next")['ClipboardPenLine']
    'LucideClipboardPlus': typeof import("../node_modules/lucide-vue-next")['ClipboardPlus']
    'LucideClipboardSignature': typeof import("../node_modules/lucide-vue-next")['ClipboardSignature']
    'LucideClipboardType': typeof import("../node_modules/lucide-vue-next")['ClipboardType']
    'LucideClipboardX': typeof import("../node_modules/lucide-vue-next")['ClipboardX']
    'LucideClock': typeof import("../node_modules/lucide-vue-next")['Clock']
    'LucideClock1': typeof import("../node_modules/lucide-vue-next")['Clock1']
    'LucideClock10': typeof import("../node_modules/lucide-vue-next")['Clock10']
    'LucideClock11': typeof import("../node_modules/lucide-vue-next")['Clock11']
    'LucideClock12': typeof import("../node_modules/lucide-vue-next")['Clock12']
    'LucideClock2': typeof import("../node_modules/lucide-vue-next")['Clock2']
    'LucideClock3': typeof import("../node_modules/lucide-vue-next")['Clock3']
    'LucideClock4': typeof import("../node_modules/lucide-vue-next")['Clock4']
    'LucideClock5': typeof import("../node_modules/lucide-vue-next")['Clock5']
    'LucideClock6': typeof import("../node_modules/lucide-vue-next")['Clock6']
    'LucideClock7': typeof import("../node_modules/lucide-vue-next")['Clock7']
    'LucideClock8': typeof import("../node_modules/lucide-vue-next")['Clock8']
    'LucideClock9': typeof import("../node_modules/lucide-vue-next")['Clock9']
    'LucideClockAlert': typeof import("../node_modules/lucide-vue-next")['ClockAlert']
    'LucideClockArrowDown': typeof import("../node_modules/lucide-vue-next")['ClockArrowDown']
    'LucideClockArrowUp': typeof import("../node_modules/lucide-vue-next")['ClockArrowUp']
    'LucideClockFading': typeof import("../node_modules/lucide-vue-next")['ClockFading']
    'LucideCloud': typeof import("../node_modules/lucide-vue-next")['Cloud']
    'LucideCloudAlert': typeof import("../node_modules/lucide-vue-next")['CloudAlert']
    'LucideCloudCog': typeof import("../node_modules/lucide-vue-next")['CloudCog']
    'LucideCloudDownload': typeof import("../node_modules/lucide-vue-next")['CloudDownload']
    'LucideCloudDrizzle': typeof import("../node_modules/lucide-vue-next")['CloudDrizzle']
    'LucideCloudFog': typeof import("../node_modules/lucide-vue-next")['CloudFog']
    'LucideCloudHail': typeof import("../node_modules/lucide-vue-next")['CloudHail']
    'LucideCloudLightning': typeof import("../node_modules/lucide-vue-next")['CloudLightning']
    'LucideCloudMoon': typeof import("../node_modules/lucide-vue-next")['CloudMoon']
    'LucideCloudMoonRain': typeof import("../node_modules/lucide-vue-next")['CloudMoonRain']
    'LucideCloudOff': typeof import("../node_modules/lucide-vue-next")['CloudOff']
    'LucideCloudRain': typeof import("../node_modules/lucide-vue-next")['CloudRain']
    'LucideCloudRainWind': typeof import("../node_modules/lucide-vue-next")['CloudRainWind']
    'LucideCloudSnow': typeof import("../node_modules/lucide-vue-next")['CloudSnow']
    'LucideCloudSun': typeof import("../node_modules/lucide-vue-next")['CloudSun']
    'LucideCloudSunRain': typeof import("../node_modules/lucide-vue-next")['CloudSunRain']
    'LucideCloudUpload': typeof import("../node_modules/lucide-vue-next")['CloudUpload']
    'LucideCloudy': typeof import("../node_modules/lucide-vue-next")['Cloudy']
    'LucideClover': typeof import("../node_modules/lucide-vue-next")['Clover']
    'LucideClub': typeof import("../node_modules/lucide-vue-next")['Club']
    'LucideCode': typeof import("../node_modules/lucide-vue-next")['Code']
    'LucideCode2': typeof import("../node_modules/lucide-vue-next")['Code2']
    'LucideCodeSquare': typeof import("../node_modules/lucide-vue-next")['CodeSquare']
    'LucideCodeXml': typeof import("../node_modules/lucide-vue-next")['CodeXml']
    'LucideCodepen': typeof import("../node_modules/lucide-vue-next")['Codepen']
    'LucideCodesandbox': typeof import("../node_modules/lucide-vue-next")['Codesandbox']
    'LucideCoffee': typeof import("../node_modules/lucide-vue-next")['Coffee']
    'LucideCog': typeof import("../node_modules/lucide-vue-next")['Cog']
    'LucideCoins': typeof import("../node_modules/lucide-vue-next")['Coins']
    'LucideColumns': typeof import("../node_modules/lucide-vue-next")['Columns']
    'LucideColumns2': typeof import("../node_modules/lucide-vue-next")['Columns2']
    'LucideColumns3': typeof import("../node_modules/lucide-vue-next")['Columns3']
    'LucideColumns4': typeof import("../node_modules/lucide-vue-next")['Columns4']
    'LucideCombine': typeof import("../node_modules/lucide-vue-next")['Combine']
    'LucideCommand': typeof import("../node_modules/lucide-vue-next")['Command']
    'LucideCompass': typeof import("../node_modules/lucide-vue-next")['Compass']
    'LucideComponent': typeof import("../node_modules/lucide-vue-next")['Component']
    'LucideComputer': typeof import("../node_modules/lucide-vue-next")['Computer']
    'LucideConciergeBell': typeof import("../node_modules/lucide-vue-next")['ConciergeBell']
    'LucideCone': typeof import("../node_modules/lucide-vue-next")['Cone']
    'LucideConstruction': typeof import("../node_modules/lucide-vue-next")['Construction']
    'LucideContact': typeof import("../node_modules/lucide-vue-next")['Contact']
    'LucideContact2': typeof import("../node_modules/lucide-vue-next")['Contact2']
    'LucideContactRound': typeof import("../node_modules/lucide-vue-next")['ContactRound']
    'LucideContainer': typeof import("../node_modules/lucide-vue-next")['Container']
    'LucideContrast': typeof import("../node_modules/lucide-vue-next")['Contrast']
    'LucideCookie': typeof import("../node_modules/lucide-vue-next")['Cookie']
    'LucideCookingPot': typeof import("../node_modules/lucide-vue-next")['CookingPot']
    'LucideCopy': typeof import("../node_modules/lucide-vue-next")['Copy']
    'LucideCopyCheck': typeof import("../node_modules/lucide-vue-next")['CopyCheck']
    'LucideCopyMinus': typeof import("../node_modules/lucide-vue-next")['CopyMinus']
    'LucideCopyPlus': typeof import("../node_modules/lucide-vue-next")['CopyPlus']
    'LucideCopySlash': typeof import("../node_modules/lucide-vue-next")['CopySlash']
    'LucideCopyX': typeof import("../node_modules/lucide-vue-next")['CopyX']
    'LucideCopyleft': typeof import("../node_modules/lucide-vue-next")['Copyleft']
    'LucideCopyright': typeof import("../node_modules/lucide-vue-next")['Copyright']
    'LucideCornerDownLeft': typeof import("../node_modules/lucide-vue-next")['CornerDownLeft']
    'LucideCornerDownRight': typeof import("../node_modules/lucide-vue-next")['CornerDownRight']
    'LucideCornerLeftDown': typeof import("../node_modules/lucide-vue-next")['CornerLeftDown']
    'LucideCornerLeftUp': typeof import("../node_modules/lucide-vue-next")['CornerLeftUp']
    'LucideCornerRightDown': typeof import("../node_modules/lucide-vue-next")['CornerRightDown']
    'LucideCornerRightUp': typeof import("../node_modules/lucide-vue-next")['CornerRightUp']
    'LucideCornerUpLeft': typeof import("../node_modules/lucide-vue-next")['CornerUpLeft']
    'LucideCornerUpRight': typeof import("../node_modules/lucide-vue-next")['CornerUpRight']
    'LucideCpu': typeof import("../node_modules/lucide-vue-next")['Cpu']
    'LucideCreativeCommons': typeof import("../node_modules/lucide-vue-next")['CreativeCommons']
    'LucideCreditCard': typeof import("../node_modules/lucide-vue-next")['CreditCard']
    'LucideCroissant': typeof import("../node_modules/lucide-vue-next")['Croissant']
    'LucideCrop': typeof import("../node_modules/lucide-vue-next")['Crop']
    'LucideCross': typeof import("../node_modules/lucide-vue-next")['Cross']
    'LucideCrosshair': typeof import("../node_modules/lucide-vue-next")['Crosshair']
    'LucideCrown': typeof import("../node_modules/lucide-vue-next")['Crown']
    'LucideCuboid': typeof import("../node_modules/lucide-vue-next")['Cuboid']
    'LucideCupSoda': typeof import("../node_modules/lucide-vue-next")['CupSoda']
    'LucideCurlyBraces': typeof import("../node_modules/lucide-vue-next")['CurlyBraces']
    'LucideCurrency': typeof import("../node_modules/lucide-vue-next")['Currency']
    'LucideCylinder': typeof import("../node_modules/lucide-vue-next")['Cylinder']
    'LucideDam': typeof import("../node_modules/lucide-vue-next")['Dam']
    'LucideDatabase': typeof import("../node_modules/lucide-vue-next")['Database']
    'LucideDatabaseBackup': typeof import("../node_modules/lucide-vue-next")['DatabaseBackup']
    'LucideDatabaseZap': typeof import("../node_modules/lucide-vue-next")['DatabaseZap']
    'LucideDelete': typeof import("../node_modules/lucide-vue-next")['Delete']
    'LucideDessert': typeof import("../node_modules/lucide-vue-next")['Dessert']
    'LucideDiameter': typeof import("../node_modules/lucide-vue-next")['Diameter']
    'LucideDiamond': typeof import("../node_modules/lucide-vue-next")['Diamond']
    'LucideDiamondMinus': typeof import("../node_modules/lucide-vue-next")['DiamondMinus']
    'LucideDiamondPercent': typeof import("../node_modules/lucide-vue-next")['DiamondPercent']
    'LucideDiamondPlus': typeof import("../node_modules/lucide-vue-next")['DiamondPlus']
    'LucideDice1': typeof import("../node_modules/lucide-vue-next")['Dice1']
    'LucideDice2': typeof import("../node_modules/lucide-vue-next")['Dice2']
    'LucideDice3': typeof import("../node_modules/lucide-vue-next")['Dice3']
    'LucideDice4': typeof import("../node_modules/lucide-vue-next")['Dice4']
    'LucideDice5': typeof import("../node_modules/lucide-vue-next")['Dice5']
    'LucideDice6': typeof import("../node_modules/lucide-vue-next")['Dice6']
    'LucideDices': typeof import("../node_modules/lucide-vue-next")['Dices']
    'LucideDiff': typeof import("../node_modules/lucide-vue-next")['Diff']
    'LucideDisc': typeof import("../node_modules/lucide-vue-next")['Disc']
    'LucideDisc2': typeof import("../node_modules/lucide-vue-next")['Disc2']
    'LucideDisc3': typeof import("../node_modules/lucide-vue-next")['Disc3']
    'LucideDiscAlbum': typeof import("../node_modules/lucide-vue-next")['DiscAlbum']
    'LucideDivide': typeof import("../node_modules/lucide-vue-next")['Divide']
    'LucideDivideCircle': typeof import("../node_modules/lucide-vue-next")['DivideCircle']
    'LucideDivideSquare': typeof import("../node_modules/lucide-vue-next")['DivideSquare']
    'LucideDna': typeof import("../node_modules/lucide-vue-next")['Dna']
    'LucideDnaOff': typeof import("../node_modules/lucide-vue-next")['DnaOff']
    'LucideDock': typeof import("../node_modules/lucide-vue-next")['Dock']
    'LucideDog': typeof import("../node_modules/lucide-vue-next")['Dog']
    'LucideDollarSign': typeof import("../node_modules/lucide-vue-next")['DollarSign']
    'LucideDonut': typeof import("../node_modules/lucide-vue-next")['Donut']
    'LucideDoorClosed': typeof import("../node_modules/lucide-vue-next")['DoorClosed']
    'LucideDoorOpen': typeof import("../node_modules/lucide-vue-next")['DoorOpen']
    'LucideDot': typeof import("../node_modules/lucide-vue-next")['Dot']
    'LucideDotSquare': typeof import("../node_modules/lucide-vue-next")['DotSquare']
    'LucideDownload': typeof import("../node_modules/lucide-vue-next")['Download']
    'LucideDownloadCloud': typeof import("../node_modules/lucide-vue-next")['DownloadCloud']
    'LucideDraftingCompass': typeof import("../node_modules/lucide-vue-next")['DraftingCompass']
    'LucideDrama': typeof import("../node_modules/lucide-vue-next")['Drama']
    'LucideDribbble': typeof import("../node_modules/lucide-vue-next")['Dribbble']
    'LucideDrill': typeof import("../node_modules/lucide-vue-next")['Drill']
    'LucideDroplet': typeof import("../node_modules/lucide-vue-next")['Droplet']
    'LucideDropletOff': typeof import("../node_modules/lucide-vue-next")['DropletOff']
    'LucideDroplets': typeof import("../node_modules/lucide-vue-next")['Droplets']
    'LucideDrum': typeof import("../node_modules/lucide-vue-next")['Drum']
    'LucideDrumstick': typeof import("../node_modules/lucide-vue-next")['Drumstick']
    'LucideDumbbell': typeof import("../node_modules/lucide-vue-next")['Dumbbell']
    'LucideEar': typeof import("../node_modules/lucide-vue-next")['Ear']
    'LucideEarOff': typeof import("../node_modules/lucide-vue-next")['EarOff']
    'LucideEarth': typeof import("../node_modules/lucide-vue-next")['Earth']
    'LucideEarthLock': typeof import("../node_modules/lucide-vue-next")['EarthLock']
    'LucideEclipse': typeof import("../node_modules/lucide-vue-next")['Eclipse']
    'LucideEdit': typeof import("../node_modules/lucide-vue-next")['Edit']
    'LucideEdit2': typeof import("../node_modules/lucide-vue-next")['Edit2']
    'LucideEdit3': typeof import("../node_modules/lucide-vue-next")['Edit3']
    'LucideEgg': typeof import("../node_modules/lucide-vue-next")['Egg']
    'LucideEggFried': typeof import("../node_modules/lucide-vue-next")['EggFried']
    'LucideEggOff': typeof import("../node_modules/lucide-vue-next")['EggOff']
    'LucideEllipsis': typeof import("../node_modules/lucide-vue-next")['Ellipsis']
    'LucideEllipsisVertical': typeof import("../node_modules/lucide-vue-next")['EllipsisVertical']
    'LucideEqual': typeof import("../node_modules/lucide-vue-next")['Equal']
    'LucideEqualApproximately': typeof import("../node_modules/lucide-vue-next")['EqualApproximately']
    'LucideEqualNot': typeof import("../node_modules/lucide-vue-next")['EqualNot']
    'LucideEqualSquare': typeof import("../node_modules/lucide-vue-next")['EqualSquare']
    'LucideEraser': typeof import("../node_modules/lucide-vue-next")['Eraser']
    'LucideEthernetPort': typeof import("../node_modules/lucide-vue-next")['EthernetPort']
    'LucideEuro': typeof import("../node_modules/lucide-vue-next")['Euro']
    'LucideExpand': typeof import("../node_modules/lucide-vue-next")['Expand']
    'LucideExternalLink': typeof import("../node_modules/lucide-vue-next")['ExternalLink']
    'LucideEye': typeof import("../node_modules/lucide-vue-next")['Eye']
    'LucideEyeClosed': typeof import("../node_modules/lucide-vue-next")['EyeClosed']
    'LucideEyeOff': typeof import("../node_modules/lucide-vue-next")['EyeOff']
    'LucideFacebook': typeof import("../node_modules/lucide-vue-next")['Facebook']
    'LucideFactory': typeof import("../node_modules/lucide-vue-next")['Factory']
    'LucideFan': typeof import("../node_modules/lucide-vue-next")['Fan']
    'LucideFastForward': typeof import("../node_modules/lucide-vue-next")['FastForward']
    'LucideFeather': typeof import("../node_modules/lucide-vue-next")['Feather']
    'LucideFence': typeof import("../node_modules/lucide-vue-next")['Fence']
    'LucideFerrisWheel': typeof import("../node_modules/lucide-vue-next")['FerrisWheel']
    'LucideFigma': typeof import("../node_modules/lucide-vue-next")['Figma']
    'LucideFile': typeof import("../node_modules/lucide-vue-next")['File']
    'LucideFileArchive': typeof import("../node_modules/lucide-vue-next")['FileArchive']
    'LucideFileAudio': typeof import("../node_modules/lucide-vue-next")['FileAudio']
    'LucideFileAudio2': typeof import("../node_modules/lucide-vue-next")['FileAudio2']
    'LucideFileAxis3d': typeof import("../node_modules/lucide-vue-next")['FileAxis3d']
    'LucideFileBadge': typeof import("../node_modules/lucide-vue-next")['FileBadge']
    'LucideFileBadge2': typeof import("../node_modules/lucide-vue-next")['FileBadge2']
    'LucideFileBarChart': typeof import("../node_modules/lucide-vue-next")['FileBarChart']
    'LucideFileBarChart2': typeof import("../node_modules/lucide-vue-next")['FileBarChart2']
    'LucideFileBox': typeof import("../node_modules/lucide-vue-next")['FileBox']
    'LucideFileChartColumn': typeof import("../node_modules/lucide-vue-next")['FileChartColumn']
    'LucideFileChartColumnIncreasing': typeof import("../node_modules/lucide-vue-next")['FileChartColumnIncreasing']
    'LucideFileChartLine': typeof import("../node_modules/lucide-vue-next")['FileChartLine']
    'LucideFileChartPie': typeof import("../node_modules/lucide-vue-next")['FileChartPie']
    'LucideFileCheck': typeof import("../node_modules/lucide-vue-next")['FileCheck']
    'LucideFileCheck2': typeof import("../node_modules/lucide-vue-next")['FileCheck2']
    'LucideFileClock': typeof import("../node_modules/lucide-vue-next")['FileClock']
    'LucideFileCode': typeof import("../node_modules/lucide-vue-next")['FileCode']
    'LucideFileCode2': typeof import("../node_modules/lucide-vue-next")['FileCode2']
    'LucideFileCog': typeof import("../node_modules/lucide-vue-next")['FileCog']
    'LucideFileCog2': typeof import("../node_modules/lucide-vue-next")['FileCog2']
    'LucideFileDiff': typeof import("../node_modules/lucide-vue-next")['FileDiff']
    'LucideFileDigit': typeof import("../node_modules/lucide-vue-next")['FileDigit']
    'LucideFileDown': typeof import("../node_modules/lucide-vue-next")['FileDown']
    'LucideFileEdit': typeof import("../node_modules/lucide-vue-next")['FileEdit']
    'LucideFileHeart': typeof import("../node_modules/lucide-vue-next")['FileHeart']
    'LucideFileImage': typeof import("../node_modules/lucide-vue-next")['FileImage']
    'LucideFileInput': typeof import("../node_modules/lucide-vue-next")['FileInput']
    'LucideFileJson': typeof import("../node_modules/lucide-vue-next")['FileJson']
    'LucideFileJson2': typeof import("../node_modules/lucide-vue-next")['FileJson2']
    'LucideFileKey': typeof import("../node_modules/lucide-vue-next")['FileKey']
    'LucideFileKey2': typeof import("../node_modules/lucide-vue-next")['FileKey2']
    'LucideFileLineChart': typeof import("../node_modules/lucide-vue-next")['FileLineChart']
    'LucideFileLock': typeof import("../node_modules/lucide-vue-next")['FileLock']
    'LucideFileLock2': typeof import("../node_modules/lucide-vue-next")['FileLock2']
    'LucideFileMinus': typeof import("../node_modules/lucide-vue-next")['FileMinus']
    'LucideFileMinus2': typeof import("../node_modules/lucide-vue-next")['FileMinus2']
    'LucideFileMusic': typeof import("../node_modules/lucide-vue-next")['FileMusic']
    'LucideFileOutput': typeof import("../node_modules/lucide-vue-next")['FileOutput']
    'LucideFilePen': typeof import("../node_modules/lucide-vue-next")['FilePen']
    'LucideFilePenLine': typeof import("../node_modules/lucide-vue-next")['FilePenLine']
    'LucideFilePieChart': typeof import("../node_modules/lucide-vue-next")['FilePieChart']
    'LucideFilePlus': typeof import("../node_modules/lucide-vue-next")['FilePlus']
    'LucideFilePlus2': typeof import("../node_modules/lucide-vue-next")['FilePlus2']
    'LucideFileQuestion': typeof import("../node_modules/lucide-vue-next")['FileQuestion']
    'LucideFileScan': typeof import("../node_modules/lucide-vue-next")['FileScan']
    'LucideFileSearch': typeof import("../node_modules/lucide-vue-next")['FileSearch']
    'LucideFileSearch2': typeof import("../node_modules/lucide-vue-next")['FileSearch2']
    'LucideFileSignature': typeof import("../node_modules/lucide-vue-next")['FileSignature']
    'LucideFileSliders': typeof import("../node_modules/lucide-vue-next")['FileSliders']
    'LucideFileSpreadsheet': typeof import("../node_modules/lucide-vue-next")['FileSpreadsheet']
    'LucideFileStack': typeof import("../node_modules/lucide-vue-next")['FileStack']
    'LucideFileSymlink': typeof import("../node_modules/lucide-vue-next")['FileSymlink']
    'LucideFileTerminal': typeof import("../node_modules/lucide-vue-next")['FileTerminal']
    'LucideFileText': typeof import("../node_modules/lucide-vue-next")['FileText']
    'LucideFileType': typeof import("../node_modules/lucide-vue-next")['FileType']
    'LucideFileType2': typeof import("../node_modules/lucide-vue-next")['FileType2']
    'LucideFileUp': typeof import("../node_modules/lucide-vue-next")['FileUp']
    'LucideFileUser': typeof import("../node_modules/lucide-vue-next")['FileUser']
    'LucideFileVideo': typeof import("../node_modules/lucide-vue-next")['FileVideo']
    'LucideFileVideo2': typeof import("../node_modules/lucide-vue-next")['FileVideo2']
    'LucideFileVolume': typeof import("../node_modules/lucide-vue-next")['FileVolume']
    'LucideFileVolume2': typeof import("../node_modules/lucide-vue-next")['FileVolume2']
    'LucideFileWarning': typeof import("../node_modules/lucide-vue-next")['FileWarning']
    'LucideFileX': typeof import("../node_modules/lucide-vue-next")['FileX']
    'LucideFileX2': typeof import("../node_modules/lucide-vue-next")['FileX2']
    'LucideFiles': typeof import("../node_modules/lucide-vue-next")['Files']
    'LucideFilm': typeof import("../node_modules/lucide-vue-next")['Film']
    'LucideFilter': typeof import("../node_modules/lucide-vue-next")['Filter']
    'LucideFilterX': typeof import("../node_modules/lucide-vue-next")['FilterX']
    'LucideFingerprint': typeof import("../node_modules/lucide-vue-next")['Fingerprint']
    'LucideFireExtinguisher': typeof import("../node_modules/lucide-vue-next")['FireExtinguisher']
    'LucideFish': typeof import("../node_modules/lucide-vue-next")['Fish']
    'LucideFishOff': typeof import("../node_modules/lucide-vue-next")['FishOff']
    'LucideFishSymbol': typeof import("../node_modules/lucide-vue-next")['FishSymbol']
    'LucideFlag': typeof import("../node_modules/lucide-vue-next")['Flag']
    'LucideFlagOff': typeof import("../node_modules/lucide-vue-next")['FlagOff']
    'LucideFlagTriangleLeft': typeof import("../node_modules/lucide-vue-next")['FlagTriangleLeft']
    'LucideFlagTriangleRight': typeof import("../node_modules/lucide-vue-next")['FlagTriangleRight']
    'LucideFlame': typeof import("../node_modules/lucide-vue-next")['Flame']
    'LucideFlameKindling': typeof import("../node_modules/lucide-vue-next")['FlameKindling']
    'LucideFlashlight': typeof import("../node_modules/lucide-vue-next")['Flashlight']
    'LucideFlashlightOff': typeof import("../node_modules/lucide-vue-next")['FlashlightOff']
    'LucideFlaskConical': typeof import("../node_modules/lucide-vue-next")['FlaskConical']
    'LucideFlaskConicalOff': typeof import("../node_modules/lucide-vue-next")['FlaskConicalOff']
    'LucideFlaskRound': typeof import("../node_modules/lucide-vue-next")['FlaskRound']
    'LucideFlipHorizontal': typeof import("../node_modules/lucide-vue-next")['FlipHorizontal']
    'LucideFlipHorizontal2': typeof import("../node_modules/lucide-vue-next")['FlipHorizontal2']
    'LucideFlipVertical': typeof import("../node_modules/lucide-vue-next")['FlipVertical']
    'LucideFlipVertical2': typeof import("../node_modules/lucide-vue-next")['FlipVertical2']
    'LucideFlower': typeof import("../node_modules/lucide-vue-next")['Flower']
    'LucideFlower2': typeof import("../node_modules/lucide-vue-next")['Flower2']
    'LucideFocus': typeof import("../node_modules/lucide-vue-next")['Focus']
    'LucideFoldHorizontal': typeof import("../node_modules/lucide-vue-next")['FoldHorizontal']
    'LucideFoldVertical': typeof import("../node_modules/lucide-vue-next")['FoldVertical']
    'LucideFolder': typeof import("../node_modules/lucide-vue-next")['Folder']
    'LucideFolderArchive': typeof import("../node_modules/lucide-vue-next")['FolderArchive']
    'LucideFolderCheck': typeof import("../node_modules/lucide-vue-next")['FolderCheck']
    'LucideFolderClock': typeof import("../node_modules/lucide-vue-next")['FolderClock']
    'LucideFolderClosed': typeof import("../node_modules/lucide-vue-next")['FolderClosed']
    'LucideFolderCode': typeof import("../node_modules/lucide-vue-next")['FolderCode']
    'LucideFolderCog': typeof import("../node_modules/lucide-vue-next")['FolderCog']
    'LucideFolderCog2': typeof import("../node_modules/lucide-vue-next")['FolderCog2']
    'LucideFolderDot': typeof import("../node_modules/lucide-vue-next")['FolderDot']
    'LucideFolderDown': typeof import("../node_modules/lucide-vue-next")['FolderDown']
    'LucideFolderEdit': typeof import("../node_modules/lucide-vue-next")['FolderEdit']
    'LucideFolderGit': typeof import("../node_modules/lucide-vue-next")['FolderGit']
    'LucideFolderGit2': typeof import("../node_modules/lucide-vue-next")['FolderGit2']
    'LucideFolderHeart': typeof import("../node_modules/lucide-vue-next")['FolderHeart']
    'LucideFolderInput': typeof import("../node_modules/lucide-vue-next")['FolderInput']
    'LucideFolderKanban': typeof import("../node_modules/lucide-vue-next")['FolderKanban']
    'LucideFolderKey': typeof import("../node_modules/lucide-vue-next")['FolderKey']
    'LucideFolderLock': typeof import("../node_modules/lucide-vue-next")['FolderLock']
    'LucideFolderMinus': typeof import("../node_modules/lucide-vue-next")['FolderMinus']
    'LucideFolderOpen': typeof import("../node_modules/lucide-vue-next")['FolderOpen']
    'LucideFolderOpenDot': typeof import("../node_modules/lucide-vue-next")['FolderOpenDot']
    'LucideFolderOutput': typeof import("../node_modules/lucide-vue-next")['FolderOutput']
    'LucideFolderPen': typeof import("../node_modules/lucide-vue-next")['FolderPen']
    'LucideFolderPlus': typeof import("../node_modules/lucide-vue-next")['FolderPlus']
    'LucideFolderRoot': typeof import("../node_modules/lucide-vue-next")['FolderRoot']
    'LucideFolderSearch': typeof import("../node_modules/lucide-vue-next")['FolderSearch']
    'LucideFolderSearch2': typeof import("../node_modules/lucide-vue-next")['FolderSearch2']
    'LucideFolderSymlink': typeof import("../node_modules/lucide-vue-next")['FolderSymlink']
    'LucideFolderSync': typeof import("../node_modules/lucide-vue-next")['FolderSync']
    'LucideFolderTree': typeof import("../node_modules/lucide-vue-next")['FolderTree']
    'LucideFolderUp': typeof import("../node_modules/lucide-vue-next")['FolderUp']
    'LucideFolderX': typeof import("../node_modules/lucide-vue-next")['FolderX']
    'LucideFolders': typeof import("../node_modules/lucide-vue-next")['Folders']
    'LucideFootprints': typeof import("../node_modules/lucide-vue-next")['Footprints']
    'LucideForkKnife': typeof import("../node_modules/lucide-vue-next")['ForkKnife']
    'LucideForkKnifeCrossed': typeof import("../node_modules/lucide-vue-next")['ForkKnifeCrossed']
    'LucideForklift': typeof import("../node_modules/lucide-vue-next")['Forklift']
    'LucideFormInput': typeof import("../node_modules/lucide-vue-next")['FormInput']
    'LucideForward': typeof import("../node_modules/lucide-vue-next")['Forward']
    'LucideFrame': typeof import("../node_modules/lucide-vue-next")['Frame']
    'LucideFramer': typeof import("../node_modules/lucide-vue-next")['Framer']
    'LucideFrown': typeof import("../node_modules/lucide-vue-next")['Frown']
    'LucideFuel': typeof import("../node_modules/lucide-vue-next")['Fuel']
    'LucideFullscreen': typeof import("../node_modules/lucide-vue-next")['Fullscreen']
    'LucideFunctionSquare': typeof import("../node_modules/lucide-vue-next")['FunctionSquare']
    'LucideFunnel': typeof import("../node_modules/lucide-vue-next")['Funnel']
    'LucideFunnelPlus': typeof import("../node_modules/lucide-vue-next")['FunnelPlus']
    'LucideFunnelX': typeof import("../node_modules/lucide-vue-next")['FunnelX']
    'LucideGalleryHorizontal': typeof import("../node_modules/lucide-vue-next")['GalleryHorizontal']
    'LucideGalleryHorizontalEnd': typeof import("../node_modules/lucide-vue-next")['GalleryHorizontalEnd']
    'LucideGalleryThumbnails': typeof import("../node_modules/lucide-vue-next")['GalleryThumbnails']
    'LucideGalleryVertical': typeof import("../node_modules/lucide-vue-next")['GalleryVertical']
    'LucideGalleryVerticalEnd': typeof import("../node_modules/lucide-vue-next")['GalleryVerticalEnd']
    'LucideGamepad': typeof import("../node_modules/lucide-vue-next")['Gamepad']
    'LucideGamepad2': typeof import("../node_modules/lucide-vue-next")['Gamepad2']
    'LucideGanttChart': typeof import("../node_modules/lucide-vue-next")['GanttChart']
    'LucideGanttChartSquare': typeof import("../node_modules/lucide-vue-next")['GanttChartSquare']
    'LucideGauge': typeof import("../node_modules/lucide-vue-next")['Gauge']
    'LucideGaugeCircle': typeof import("../node_modules/lucide-vue-next")['GaugeCircle']
    'LucideGavel': typeof import("../node_modules/lucide-vue-next")['Gavel']
    'LucideGem': typeof import("../node_modules/lucide-vue-next")['Gem']
    'LucideGhost': typeof import("../node_modules/lucide-vue-next")['Ghost']
    'LucideGift': typeof import("../node_modules/lucide-vue-next")['Gift']
    'LucideGitBranch': typeof import("../node_modules/lucide-vue-next")['GitBranch']
    'LucideGitBranchPlus': typeof import("../node_modules/lucide-vue-next")['GitBranchPlus']
    'LucideGitCommit': typeof import("../node_modules/lucide-vue-next")['GitCommit']
    'LucideGitCommitHorizontal': typeof import("../node_modules/lucide-vue-next")['GitCommitHorizontal']
    'LucideGitCommitVertical': typeof import("../node_modules/lucide-vue-next")['GitCommitVertical']
    'LucideGitCompare': typeof import("../node_modules/lucide-vue-next")['GitCompare']
    'LucideGitCompareArrows': typeof import("../node_modules/lucide-vue-next")['GitCompareArrows']
    'LucideGitFork': typeof import("../node_modules/lucide-vue-next")['GitFork']
    'LucideGitGraph': typeof import("../node_modules/lucide-vue-next")['GitGraph']
    'LucideGitMerge': typeof import("../node_modules/lucide-vue-next")['GitMerge']
    'LucideGitPullRequest': typeof import("../node_modules/lucide-vue-next")['GitPullRequest']
    'LucideGitPullRequestArrow': typeof import("../node_modules/lucide-vue-next")['GitPullRequestArrow']
    'LucideGitPullRequestClosed': typeof import("../node_modules/lucide-vue-next")['GitPullRequestClosed']
    'LucideGitPullRequestCreate': typeof import("../node_modules/lucide-vue-next")['GitPullRequestCreate']
    'LucideGitPullRequestCreateArrow': typeof import("../node_modules/lucide-vue-next")['GitPullRequestCreateArrow']
    'LucideGitPullRequestDraft': typeof import("../node_modules/lucide-vue-next")['GitPullRequestDraft']
    'LucideGithub': typeof import("../node_modules/lucide-vue-next")['Github']
    'LucideGitlab': typeof import("../node_modules/lucide-vue-next")['Gitlab']
    'LucideGlassWater': typeof import("../node_modules/lucide-vue-next")['GlassWater']
    'LucideGlasses': typeof import("../node_modules/lucide-vue-next")['Glasses']
    'LucideGlobe': typeof import("../node_modules/lucide-vue-next")['Globe']
    'LucideGlobe2': typeof import("../node_modules/lucide-vue-next")['Globe2']
    'LucideGlobeLock': typeof import("../node_modules/lucide-vue-next")['GlobeLock']
    'LucideGoal': typeof import("../node_modules/lucide-vue-next")['Goal']
    'LucideGrab': typeof import("../node_modules/lucide-vue-next")['Grab']
    'LucideGraduationCap': typeof import("../node_modules/lucide-vue-next")['GraduationCap']
    'LucideGrape': typeof import("../node_modules/lucide-vue-next")['Grape']
    'LucideGrid': typeof import("../node_modules/lucide-vue-next")['Grid']
    'LucideGrid2x2': typeof import("../node_modules/lucide-vue-next")['Grid2x2']
    'LucideGrid2x2Check': typeof import("../node_modules/lucide-vue-next")['Grid2x2Check']
    'LucideGrid2x2Plus': typeof import("../node_modules/lucide-vue-next")['Grid2x2Plus']
    'LucideGrid2x2X': typeof import("../node_modules/lucide-vue-next")['Grid2x2X']
    'LucideGrid3x3': typeof import("../node_modules/lucide-vue-next")['Grid3x3']
    'LucideGrip': typeof import("../node_modules/lucide-vue-next")['Grip']
    'LucideGripHorizontal': typeof import("../node_modules/lucide-vue-next")['GripHorizontal']
    'LucideGripVertical': typeof import("../node_modules/lucide-vue-next")['GripVertical']
    'LucideGroup': typeof import("../node_modules/lucide-vue-next")['Group']
    'LucideGuitar': typeof import("../node_modules/lucide-vue-next")['Guitar']
    'LucideHam': typeof import("../node_modules/lucide-vue-next")['Ham']
    'LucideHammer': typeof import("../node_modules/lucide-vue-next")['Hammer']
    'LucideHand': typeof import("../node_modules/lucide-vue-next")['Hand']
    'LucideHandCoins': typeof import("../node_modules/lucide-vue-next")['HandCoins']
    'LucideHandHeart': typeof import("../node_modules/lucide-vue-next")['HandHeart']
    'LucideHandHelping': typeof import("../node_modules/lucide-vue-next")['HandHelping']
    'LucideHandMetal': typeof import("../node_modules/lucide-vue-next")['HandMetal']
    'LucideHandPlatter': typeof import("../node_modules/lucide-vue-next")['HandPlatter']
    'LucideHandshake': typeof import("../node_modules/lucide-vue-next")['Handshake']
    'LucideHardDrive': typeof import("../node_modules/lucide-vue-next")['HardDrive']
    'LucideHardDriveDownload': typeof import("../node_modules/lucide-vue-next")['HardDriveDownload']
    'LucideHardDriveUpload': typeof import("../node_modules/lucide-vue-next")['HardDriveUpload']
    'LucideHardHat': typeof import("../node_modules/lucide-vue-next")['HardHat']
    'LucideHash': typeof import("../node_modules/lucide-vue-next")['Hash']
    'LucideHaze': typeof import("../node_modules/lucide-vue-next")['Haze']
    'LucideHdmiPort': typeof import("../node_modules/lucide-vue-next")['HdmiPort']
    'LucideHeading': typeof import("../node_modules/lucide-vue-next")['Heading']
    'LucideHeading1': typeof import("../node_modules/lucide-vue-next")['Heading1']
    'LucideHeading2': typeof import("../node_modules/lucide-vue-next")['Heading2']
    'LucideHeading3': typeof import("../node_modules/lucide-vue-next")['Heading3']
    'LucideHeading4': typeof import("../node_modules/lucide-vue-next")['Heading4']
    'LucideHeading5': typeof import("../node_modules/lucide-vue-next")['Heading5']
    'LucideHeading6': typeof import("../node_modules/lucide-vue-next")['Heading6']
    'LucideHeadphoneOff': typeof import("../node_modules/lucide-vue-next")['HeadphoneOff']
    'LucideHeadphones': typeof import("../node_modules/lucide-vue-next")['Headphones']
    'LucideHeadset': typeof import("../node_modules/lucide-vue-next")['Headset']
    'LucideHeart': typeof import("../node_modules/lucide-vue-next")['Heart']
    'LucideHeartCrack': typeof import("../node_modules/lucide-vue-next")['HeartCrack']
    'LucideHeartHandshake': typeof import("../node_modules/lucide-vue-next")['HeartHandshake']
    'LucideHeartOff': typeof import("../node_modules/lucide-vue-next")['HeartOff']
    'LucideHeartPulse': typeof import("../node_modules/lucide-vue-next")['HeartPulse']
    'LucideHeater': typeof import("../node_modules/lucide-vue-next")['Heater']
    'LucideHelpCircle': typeof import("../node_modules/lucide-vue-next")['HelpCircle']
    'LucideHelpingHand': typeof import("../node_modules/lucide-vue-next")['HelpingHand']
    'LucideHexagon': typeof import("../node_modules/lucide-vue-next")['Hexagon']
    'LucideHighlighter': typeof import("../node_modules/lucide-vue-next")['Highlighter']
    'LucideHistory': typeof import("../node_modules/lucide-vue-next")['History']
    'LucideHome': typeof import("../node_modules/lucide-vue-next")['Home']
    'LucideHop': typeof import("../node_modules/lucide-vue-next")['Hop']
    'LucideHopOff': typeof import("../node_modules/lucide-vue-next")['HopOff']
    'LucideHospital': typeof import("../node_modules/lucide-vue-next")['Hospital']
    'LucideHotel': typeof import("../node_modules/lucide-vue-next")['Hotel']
    'LucideHourglass': typeof import("../node_modules/lucide-vue-next")['Hourglass']
    'LucideHouse': typeof import("../node_modules/lucide-vue-next")['House']
    'LucideHousePlug': typeof import("../node_modules/lucide-vue-next")['HousePlug']
    'LucideHousePlus': typeof import("../node_modules/lucide-vue-next")['HousePlus']
    'LucideHouseWifi': typeof import("../node_modules/lucide-vue-next")['HouseWifi']
    'LucideIceCream': typeof import("../node_modules/lucide-vue-next")['IceCream']
    'LucideIceCream2': typeof import("../node_modules/lucide-vue-next")['IceCream2']
    'LucideIceCreamBowl': typeof import("../node_modules/lucide-vue-next")['IceCreamBowl']
    'LucideIceCreamCone': typeof import("../node_modules/lucide-vue-next")['IceCreamCone']
    'LucideIdCard': typeof import("../node_modules/lucide-vue-next")['IdCard']
    'LucideImage': typeof import("../node_modules/lucide-vue-next")['Image']
    'LucideImageDown': typeof import("../node_modules/lucide-vue-next")['ImageDown']
    'LucideImageMinus': typeof import("../node_modules/lucide-vue-next")['ImageMinus']
    'LucideImageOff': typeof import("../node_modules/lucide-vue-next")['ImageOff']
    'LucideImagePlay': typeof import("../node_modules/lucide-vue-next")['ImagePlay']
    'LucideImagePlus': typeof import("../node_modules/lucide-vue-next")['ImagePlus']
    'LucideImageUp': typeof import("../node_modules/lucide-vue-next")['ImageUp']
    'LucideImageUpscale': typeof import("../node_modules/lucide-vue-next")['ImageUpscale']
    'LucideImages': typeof import("../node_modules/lucide-vue-next")['Images']
    'LucideImport': typeof import("../node_modules/lucide-vue-next")['Import']
    'LucideInbox': typeof import("../node_modules/lucide-vue-next")['Inbox']
    'LucideIndent': typeof import("../node_modules/lucide-vue-next")['Indent']
    'LucideIndentDecrease': typeof import("../node_modules/lucide-vue-next")['IndentDecrease']
    'LucideIndentIncrease': typeof import("../node_modules/lucide-vue-next")['IndentIncrease']
    'LucideIndianRupee': typeof import("../node_modules/lucide-vue-next")['IndianRupee']
    'LucideInfinity': typeof import("../node_modules/lucide-vue-next")['Infinity']
    'LucideInfo': typeof import("../node_modules/lucide-vue-next")['Info']
    'LucideInspect': typeof import("../node_modules/lucide-vue-next")['Inspect']
    'LucideInspectionPanel': typeof import("../node_modules/lucide-vue-next")['InspectionPanel']
    'LucideInstagram': typeof import("../node_modules/lucide-vue-next")['Instagram']
    'LucideItalic': typeof import("../node_modules/lucide-vue-next")['Italic']
    'LucideIterationCcw': typeof import("../node_modules/lucide-vue-next")['IterationCcw']
    'LucideIterationCw': typeof import("../node_modules/lucide-vue-next")['IterationCw']
    'LucideJapaneseYen': typeof import("../node_modules/lucide-vue-next")['JapaneseYen']
    'LucideJoystick': typeof import("../node_modules/lucide-vue-next")['Joystick']
    'LucideKanban': typeof import("../node_modules/lucide-vue-next")['Kanban']
    'LucideKanbanSquare': typeof import("../node_modules/lucide-vue-next")['KanbanSquare']
    'LucideKanbanSquareDashed': typeof import("../node_modules/lucide-vue-next")['KanbanSquareDashed']
    'LucideKey': typeof import("../node_modules/lucide-vue-next")['Key']
    'LucideKeyRound': typeof import("../node_modules/lucide-vue-next")['KeyRound']
    'LucideKeySquare': typeof import("../node_modules/lucide-vue-next")['KeySquare']
    'LucideKeyboard': typeof import("../node_modules/lucide-vue-next")['Keyboard']
    'LucideKeyboardMusic': typeof import("../node_modules/lucide-vue-next")['KeyboardMusic']
    'LucideKeyboardOff': typeof import("../node_modules/lucide-vue-next")['KeyboardOff']
    'LucideLamp': typeof import("../node_modules/lucide-vue-next")['Lamp']
    'LucideLampCeiling': typeof import("../node_modules/lucide-vue-next")['LampCeiling']
    'LucideLampDesk': typeof import("../node_modules/lucide-vue-next")['LampDesk']
    'LucideLampFloor': typeof import("../node_modules/lucide-vue-next")['LampFloor']
    'LucideLampWallDown': typeof import("../node_modules/lucide-vue-next")['LampWallDown']
    'LucideLampWallUp': typeof import("../node_modules/lucide-vue-next")['LampWallUp']
    'LucideLandPlot': typeof import("../node_modules/lucide-vue-next")['LandPlot']
    'LucideLandmark': typeof import("../node_modules/lucide-vue-next")['Landmark']
    'LucideLanguages': typeof import("../node_modules/lucide-vue-next")['Languages']
    'LucideLaptop': typeof import("../node_modules/lucide-vue-next")['Laptop']
    'LucideLaptop2': typeof import("../node_modules/lucide-vue-next")['Laptop2']
    'LucideLaptopMinimal': typeof import("../node_modules/lucide-vue-next")['LaptopMinimal']
    'LucideLaptopMinimalCheck': typeof import("../node_modules/lucide-vue-next")['LaptopMinimalCheck']
    'LucideLasso': typeof import("../node_modules/lucide-vue-next")['Lasso']
    'LucideLassoSelect': typeof import("../node_modules/lucide-vue-next")['LassoSelect']
    'LucideLaugh': typeof import("../node_modules/lucide-vue-next")['Laugh']
    'LucideLayers': typeof import("../node_modules/lucide-vue-next")['Layers']
    'LucideLayers2': typeof import("../node_modules/lucide-vue-next")['Layers2']
    'LucideLayers3': typeof import("../node_modules/lucide-vue-next")['Layers3']
    'LucideLayout': typeof import("../node_modules/lucide-vue-next")['Layout']
    'LucideLayoutDashboard': typeof import("../node_modules/lucide-vue-next")['LayoutDashboard']
    'LucideLayoutGrid': typeof import("../node_modules/lucide-vue-next")['LayoutGrid']
    'LucideLayoutList': typeof import("../node_modules/lucide-vue-next")['LayoutList']
    'LucideLayoutPanelLeft': typeof import("../node_modules/lucide-vue-next")['LayoutPanelLeft']
    'LucideLayoutPanelTop': typeof import("../node_modules/lucide-vue-next")['LayoutPanelTop']
    'LucideLayoutTemplate': typeof import("../node_modules/lucide-vue-next")['LayoutTemplate']
    'LucideLeaf': typeof import("../node_modules/lucide-vue-next")['Leaf']
    'LucideLeafyGreen': typeof import("../node_modules/lucide-vue-next")['LeafyGreen']
    'LucideLectern': typeof import("../node_modules/lucide-vue-next")['Lectern']
    'LucideLetterText': typeof import("../node_modules/lucide-vue-next")['LetterText']
    'LucideLibrary': typeof import("../node_modules/lucide-vue-next")['Library']
    'LucideLibraryBig': typeof import("../node_modules/lucide-vue-next")['LibraryBig']
    'LucideLibrarySquare': typeof import("../node_modules/lucide-vue-next")['LibrarySquare']
    'LucideLifeBuoy': typeof import("../node_modules/lucide-vue-next")['LifeBuoy']
    'LucideLigature': typeof import("../node_modules/lucide-vue-next")['Ligature']
    'LucideLightbulb': typeof import("../node_modules/lucide-vue-next")['Lightbulb']
    'LucideLightbulbOff': typeof import("../node_modules/lucide-vue-next")['LightbulbOff']
    'LucideLineChart': typeof import("../node_modules/lucide-vue-next")['LineChart']
    'LucideLink': typeof import("../node_modules/lucide-vue-next")['Link']
    'LucideLink2': typeof import("../node_modules/lucide-vue-next")['Link2']
    'LucideLink2Off': typeof import("../node_modules/lucide-vue-next")['Link2Off']
    'LucideLinkedin': typeof import("../node_modules/lucide-vue-next")['Linkedin']
    'LucideList': typeof import("../node_modules/lucide-vue-next")['List']
    'LucideListCheck': typeof import("../node_modules/lucide-vue-next")['ListCheck']
    'LucideListChecks': typeof import("../node_modules/lucide-vue-next")['ListChecks']
    'LucideListCollapse': typeof import("../node_modules/lucide-vue-next")['ListCollapse']
    'LucideListEnd': typeof import("../node_modules/lucide-vue-next")['ListEnd']
    'LucideListFilter': typeof import("../node_modules/lucide-vue-next")['ListFilter']
    'LucideListFilterPlus': typeof import("../node_modules/lucide-vue-next")['ListFilterPlus']
    'LucideListMinus': typeof import("../node_modules/lucide-vue-next")['ListMinus']
    'LucideListMusic': typeof import("../node_modules/lucide-vue-next")['ListMusic']
    'LucideListOrdered': typeof import("../node_modules/lucide-vue-next")['ListOrdered']
    'LucideListPlus': typeof import("../node_modules/lucide-vue-next")['ListPlus']
    'LucideListRestart': typeof import("../node_modules/lucide-vue-next")['ListRestart']
    'LucideListStart': typeof import("../node_modules/lucide-vue-next")['ListStart']
    'LucideListTodo': typeof import("../node_modules/lucide-vue-next")['ListTodo']
    'LucideListTree': typeof import("../node_modules/lucide-vue-next")['ListTree']
    'LucideListVideo': typeof import("../node_modules/lucide-vue-next")['ListVideo']
    'LucideListX': typeof import("../node_modules/lucide-vue-next")['ListX']
    'LucideLoader': typeof import("../node_modules/lucide-vue-next")['Loader']
    'LucideLoader2': typeof import("../node_modules/lucide-vue-next")['Loader2']
    'LucideLoaderCircle': typeof import("../node_modules/lucide-vue-next")['LoaderCircle']
    'LucideLoaderPinwheel': typeof import("../node_modules/lucide-vue-next")['LoaderPinwheel']
    'LucideLocate': typeof import("../node_modules/lucide-vue-next")['Locate']
    'LucideLocateFixed': typeof import("../node_modules/lucide-vue-next")['LocateFixed']
    'LucideLocateOff': typeof import("../node_modules/lucide-vue-next")['LocateOff']
    'LucideLock': typeof import("../node_modules/lucide-vue-next")['Lock']
    'LucideLockKeyhole': typeof import("../node_modules/lucide-vue-next")['LockKeyhole']
    'LucideLockKeyholeOpen': typeof import("../node_modules/lucide-vue-next")['LockKeyholeOpen']
    'LucideLockOpen': typeof import("../node_modules/lucide-vue-next")['LockOpen']
    'LucideLogIn': typeof import("../node_modules/lucide-vue-next")['LogIn']
    'LucideLogOut': typeof import("../node_modules/lucide-vue-next")['LogOut']
    'LucideLogs': typeof import("../node_modules/lucide-vue-next")['Logs']
    'LucideLollipop': typeof import("../node_modules/lucide-vue-next")['Lollipop']
    'LucideLuggage': typeof import("../node_modules/lucide-vue-next")['Luggage']
    'LucideMSquare': typeof import("../node_modules/lucide-vue-next")['MSquare']
    'LucideMagnet': typeof import("../node_modules/lucide-vue-next")['Magnet']
    'LucideMail': typeof import("../node_modules/lucide-vue-next")['Mail']
    'LucideMailCheck': typeof import("../node_modules/lucide-vue-next")['MailCheck']
    'LucideMailMinus': typeof import("../node_modules/lucide-vue-next")['MailMinus']
    'LucideMailOpen': typeof import("../node_modules/lucide-vue-next")['MailOpen']
    'LucideMailPlus': typeof import("../node_modules/lucide-vue-next")['MailPlus']
    'LucideMailQuestion': typeof import("../node_modules/lucide-vue-next")['MailQuestion']
    'LucideMailSearch': typeof import("../node_modules/lucide-vue-next")['MailSearch']
    'LucideMailWarning': typeof import("../node_modules/lucide-vue-next")['MailWarning']
    'LucideMailX': typeof import("../node_modules/lucide-vue-next")['MailX']
    'LucideMailbox': typeof import("../node_modules/lucide-vue-next")['Mailbox']
    'LucideMails': typeof import("../node_modules/lucide-vue-next")['Mails']
    'LucideMap': typeof import("../node_modules/lucide-vue-next")['Map']
    'LucideMapPin': typeof import("../node_modules/lucide-vue-next")['MapPin']
    'LucideMapPinCheck': typeof import("../node_modules/lucide-vue-next")['MapPinCheck']
    'LucideMapPinCheckInside': typeof import("../node_modules/lucide-vue-next")['MapPinCheckInside']
    'LucideMapPinHouse': typeof import("../node_modules/lucide-vue-next")['MapPinHouse']
    'LucideMapPinMinus': typeof import("../node_modules/lucide-vue-next")['MapPinMinus']
    'LucideMapPinMinusInside': typeof import("../node_modules/lucide-vue-next")['MapPinMinusInside']
    'LucideMapPinOff': typeof import("../node_modules/lucide-vue-next")['MapPinOff']
    'LucideMapPinPlus': typeof import("../node_modules/lucide-vue-next")['MapPinPlus']
    'LucideMapPinPlusInside': typeof import("../node_modules/lucide-vue-next")['MapPinPlusInside']
    'LucideMapPinX': typeof import("../node_modules/lucide-vue-next")['MapPinX']
    'LucideMapPinXInside': typeof import("../node_modules/lucide-vue-next")['MapPinXInside']
    'LucideMapPinned': typeof import("../node_modules/lucide-vue-next")['MapPinned']
    'LucideMapPlus': typeof import("../node_modules/lucide-vue-next")['MapPlus']
    'LucideMars': typeof import("../node_modules/lucide-vue-next")['Mars']
    'LucideMarsStroke': typeof import("../node_modules/lucide-vue-next")['MarsStroke']
    'LucideMartini': typeof import("../node_modules/lucide-vue-next")['Martini']
    'LucideMaximize': typeof import("../node_modules/lucide-vue-next")['Maximize']
    'LucideMaximize2': typeof import("../node_modules/lucide-vue-next")['Maximize2']
    'LucideMedal': typeof import("../node_modules/lucide-vue-next")['Medal']
    'LucideMegaphone': typeof import("../node_modules/lucide-vue-next")['Megaphone']
    'LucideMegaphoneOff': typeof import("../node_modules/lucide-vue-next")['MegaphoneOff']
    'LucideMeh': typeof import("../node_modules/lucide-vue-next")['Meh']
    'LucideMemoryStick': typeof import("../node_modules/lucide-vue-next")['MemoryStick']
    'LucideMenu': typeof import("../node_modules/lucide-vue-next")['Menu']
    'LucideMenuSquare': typeof import("../node_modules/lucide-vue-next")['MenuSquare']
    'LucideMerge': typeof import("../node_modules/lucide-vue-next")['Merge']
    'LucideMessageCircle': typeof import("../node_modules/lucide-vue-next")['MessageCircle']
    'LucideMessageCircleCode': typeof import("../node_modules/lucide-vue-next")['MessageCircleCode']
    'LucideMessageCircleDashed': typeof import("../node_modules/lucide-vue-next")['MessageCircleDashed']
    'LucideMessageCircleHeart': typeof import("../node_modules/lucide-vue-next")['MessageCircleHeart']
    'LucideMessageCircleMore': typeof import("../node_modules/lucide-vue-next")['MessageCircleMore']
    'LucideMessageCircleOff': typeof import("../node_modules/lucide-vue-next")['MessageCircleOff']
    'LucideMessageCirclePlus': typeof import("../node_modules/lucide-vue-next")['MessageCirclePlus']
    'LucideMessageCircleQuestion': typeof import("../node_modules/lucide-vue-next")['MessageCircleQuestion']
    'LucideMessageCircleReply': typeof import("../node_modules/lucide-vue-next")['MessageCircleReply']
    'LucideMessageCircleWarning': typeof import("../node_modules/lucide-vue-next")['MessageCircleWarning']
    'LucideMessageCircleX': typeof import("../node_modules/lucide-vue-next")['MessageCircleX']
    'LucideMessageSquare': typeof import("../node_modules/lucide-vue-next")['MessageSquare']
    'LucideMessageSquareCode': typeof import("../node_modules/lucide-vue-next")['MessageSquareCode']
    'LucideMessageSquareDashed': typeof import("../node_modules/lucide-vue-next")['MessageSquareDashed']
    'LucideMessageSquareDiff': typeof import("../node_modules/lucide-vue-next")['MessageSquareDiff']
    'LucideMessageSquareDot': typeof import("../node_modules/lucide-vue-next")['MessageSquareDot']
    'LucideMessageSquareHeart': typeof import("../node_modules/lucide-vue-next")['MessageSquareHeart']
    'LucideMessageSquareLock': typeof import("../node_modules/lucide-vue-next")['MessageSquareLock']
    'LucideMessageSquareMore': typeof import("../node_modules/lucide-vue-next")['MessageSquareMore']
    'LucideMessageSquareOff': typeof import("../node_modules/lucide-vue-next")['MessageSquareOff']
    'LucideMessageSquarePlus': typeof import("../node_modules/lucide-vue-next")['MessageSquarePlus']
    'LucideMessageSquareQuote': typeof import("../node_modules/lucide-vue-next")['MessageSquareQuote']
    'LucideMessageSquareReply': typeof import("../node_modules/lucide-vue-next")['MessageSquareReply']
    'LucideMessageSquareShare': typeof import("../node_modules/lucide-vue-next")['MessageSquareShare']
    'LucideMessageSquareText': typeof import("../node_modules/lucide-vue-next")['MessageSquareText']
    'LucideMessageSquareWarning': typeof import("../node_modules/lucide-vue-next")['MessageSquareWarning']
    'LucideMessageSquareX': typeof import("../node_modules/lucide-vue-next")['MessageSquareX']
    'LucideMessagesSquare': typeof import("../node_modules/lucide-vue-next")['MessagesSquare']
    'LucideMic': typeof import("../node_modules/lucide-vue-next")['Mic']
    'LucideMic2': typeof import("../node_modules/lucide-vue-next")['Mic2']
    'LucideMicOff': typeof import("../node_modules/lucide-vue-next")['MicOff']
    'LucideMicVocal': typeof import("../node_modules/lucide-vue-next")['MicVocal']
    'LucideMicrochip': typeof import("../node_modules/lucide-vue-next")['Microchip']
    'LucideMicroscope': typeof import("../node_modules/lucide-vue-next")['Microscope']
    'LucideMicrowave': typeof import("../node_modules/lucide-vue-next")['Microwave']
    'LucideMilestone': typeof import("../node_modules/lucide-vue-next")['Milestone']
    'LucideMilk': typeof import("../node_modules/lucide-vue-next")['Milk']
    'LucideMilkOff': typeof import("../node_modules/lucide-vue-next")['MilkOff']
    'LucideMinimize': typeof import("../node_modules/lucide-vue-next")['Minimize']
    'LucideMinimize2': typeof import("../node_modules/lucide-vue-next")['Minimize2']
    'LucideMinus': typeof import("../node_modules/lucide-vue-next")['Minus']
    'LucideMinusCircle': typeof import("../node_modules/lucide-vue-next")['MinusCircle']
    'LucideMinusSquare': typeof import("../node_modules/lucide-vue-next")['MinusSquare']
    'LucideMonitor': typeof import("../node_modules/lucide-vue-next")['Monitor']
    'LucideMonitorCheck': typeof import("../node_modules/lucide-vue-next")['MonitorCheck']
    'LucideMonitorCog': typeof import("../node_modules/lucide-vue-next")['MonitorCog']
    'LucideMonitorDot': typeof import("../node_modules/lucide-vue-next")['MonitorDot']
    'LucideMonitorDown': typeof import("../node_modules/lucide-vue-next")['MonitorDown']
    'LucideMonitorOff': typeof import("../node_modules/lucide-vue-next")['MonitorOff']
    'LucideMonitorPause': typeof import("../node_modules/lucide-vue-next")['MonitorPause']
    'LucideMonitorPlay': typeof import("../node_modules/lucide-vue-next")['MonitorPlay']
    'LucideMonitorSmartphone': typeof import("../node_modules/lucide-vue-next")['MonitorSmartphone']
    'LucideMonitorSpeaker': typeof import("../node_modules/lucide-vue-next")['MonitorSpeaker']
    'LucideMonitorStop': typeof import("../node_modules/lucide-vue-next")['MonitorStop']
    'LucideMonitorUp': typeof import("../node_modules/lucide-vue-next")['MonitorUp']
    'LucideMonitorX': typeof import("../node_modules/lucide-vue-next")['MonitorX']
    'LucideMoon': typeof import("../node_modules/lucide-vue-next")['Moon']
    'LucideMoonStar': typeof import("../node_modules/lucide-vue-next")['MoonStar']
    'LucideMoreHorizontal': typeof import("../node_modules/lucide-vue-next")['MoreHorizontal']
    'LucideMoreVertical': typeof import("../node_modules/lucide-vue-next")['MoreVertical']
    'LucideMountain': typeof import("../node_modules/lucide-vue-next")['Mountain']
    'LucideMountainSnow': typeof import("../node_modules/lucide-vue-next")['MountainSnow']
    'LucideMouse': typeof import("../node_modules/lucide-vue-next")['Mouse']
    'LucideMouseOff': typeof import("../node_modules/lucide-vue-next")['MouseOff']
    'LucideMousePointer': typeof import("../node_modules/lucide-vue-next")['MousePointer']
    'LucideMousePointer2': typeof import("../node_modules/lucide-vue-next")['MousePointer2']
    'LucideMousePointerBan': typeof import("../node_modules/lucide-vue-next")['MousePointerBan']
    'LucideMousePointerClick': typeof import("../node_modules/lucide-vue-next")['MousePointerClick']
    'LucideMousePointerSquareDashed': typeof import("../node_modules/lucide-vue-next")['MousePointerSquareDashed']
    'LucideMove': typeof import("../node_modules/lucide-vue-next")['Move']
    'LucideMove3d': typeof import("../node_modules/lucide-vue-next")['Move3d']
    'LucideMoveDiagonal': typeof import("../node_modules/lucide-vue-next")['MoveDiagonal']
    'LucideMoveDiagonal2': typeof import("../node_modules/lucide-vue-next")['MoveDiagonal2']
    'LucideMoveDown': typeof import("../node_modules/lucide-vue-next")['MoveDown']
    'LucideMoveDownLeft': typeof import("../node_modules/lucide-vue-next")['MoveDownLeft']
    'LucideMoveDownRight': typeof import("../node_modules/lucide-vue-next")['MoveDownRight']
    'LucideMoveHorizontal': typeof import("../node_modules/lucide-vue-next")['MoveHorizontal']
    'LucideMoveLeft': typeof import("../node_modules/lucide-vue-next")['MoveLeft']
    'LucideMoveRight': typeof import("../node_modules/lucide-vue-next")['MoveRight']
    'LucideMoveUp': typeof import("../node_modules/lucide-vue-next")['MoveUp']
    'LucideMoveUpLeft': typeof import("../node_modules/lucide-vue-next")['MoveUpLeft']
    'LucideMoveUpRight': typeof import("../node_modules/lucide-vue-next")['MoveUpRight']
    'LucideMoveVertical': typeof import("../node_modules/lucide-vue-next")['MoveVertical']
    'LucideMusic': typeof import("../node_modules/lucide-vue-next")['Music']
    'LucideMusic2': typeof import("../node_modules/lucide-vue-next")['Music2']
    'LucideMusic3': typeof import("../node_modules/lucide-vue-next")['Music3']
    'LucideMusic4': typeof import("../node_modules/lucide-vue-next")['Music4']
    'LucideNavigation': typeof import("../node_modules/lucide-vue-next")['Navigation']
    'LucideNavigation2': typeof import("../node_modules/lucide-vue-next")['Navigation2']
    'LucideNavigation2Off': typeof import("../node_modules/lucide-vue-next")['Navigation2Off']
    'LucideNavigationOff': typeof import("../node_modules/lucide-vue-next")['NavigationOff']
    'LucideNetwork': typeof import("../node_modules/lucide-vue-next")['Network']
    'LucideNewspaper': typeof import("../node_modules/lucide-vue-next")['Newspaper']
    'LucideNfc': typeof import("../node_modules/lucide-vue-next")['Nfc']
    'LucideNonBinary': typeof import("../node_modules/lucide-vue-next")['NonBinary']
    'LucideNotebook': typeof import("../node_modules/lucide-vue-next")['Notebook']
    'LucideNotebookPen': typeof import("../node_modules/lucide-vue-next")['NotebookPen']
    'LucideNotebookTabs': typeof import("../node_modules/lucide-vue-next")['NotebookTabs']
    'LucideNotebookText': typeof import("../node_modules/lucide-vue-next")['NotebookText']
    'LucideNotepadText': typeof import("../node_modules/lucide-vue-next")['NotepadText']
    'LucideNotepadTextDashed': typeof import("../node_modules/lucide-vue-next")['NotepadTextDashed']
    'LucideNut': typeof import("../node_modules/lucide-vue-next")['Nut']
    'LucideNutOff': typeof import("../node_modules/lucide-vue-next")['NutOff']
    'LucideOctagon': typeof import("../node_modules/lucide-vue-next")['Octagon']
    'LucideOctagonAlert': typeof import("../node_modules/lucide-vue-next")['OctagonAlert']
    'LucideOctagonMinus': typeof import("../node_modules/lucide-vue-next")['OctagonMinus']
    'LucideOctagonPause': typeof import("../node_modules/lucide-vue-next")['OctagonPause']
    'LucideOctagonX': typeof import("../node_modules/lucide-vue-next")['OctagonX']
    'LucideOmega': typeof import("../node_modules/lucide-vue-next")['Omega']
    'LucideOption': typeof import("../node_modules/lucide-vue-next")['Option']
    'LucideOrbit': typeof import("../node_modules/lucide-vue-next")['Orbit']
    'LucideOrigami': typeof import("../node_modules/lucide-vue-next")['Origami']
    'LucideOutdent': typeof import("../node_modules/lucide-vue-next")['Outdent']
    'LucidePackage': typeof import("../node_modules/lucide-vue-next")['Package']
    'LucidePackage2': typeof import("../node_modules/lucide-vue-next")['Package2']
    'LucidePackageCheck': typeof import("../node_modules/lucide-vue-next")['PackageCheck']
    'LucidePackageMinus': typeof import("../node_modules/lucide-vue-next")['PackageMinus']
    'LucidePackageOpen': typeof import("../node_modules/lucide-vue-next")['PackageOpen']
    'LucidePackagePlus': typeof import("../node_modules/lucide-vue-next")['PackagePlus']
    'LucidePackageSearch': typeof import("../node_modules/lucide-vue-next")['PackageSearch']
    'LucidePackageX': typeof import("../node_modules/lucide-vue-next")['PackageX']
    'LucidePaintBucket': typeof import("../node_modules/lucide-vue-next")['PaintBucket']
    'LucidePaintRoller': typeof import("../node_modules/lucide-vue-next")['PaintRoller']
    'LucidePaintbrush': typeof import("../node_modules/lucide-vue-next")['Paintbrush']
    'LucidePaintbrush2': typeof import("../node_modules/lucide-vue-next")['Paintbrush2']
    'LucidePaintbrushVertical': typeof import("../node_modules/lucide-vue-next")['PaintbrushVertical']
    'LucidePalette': typeof import("../node_modules/lucide-vue-next")['Palette']
    'LucidePalmtree': typeof import("../node_modules/lucide-vue-next")['Palmtree']
    'LucidePanelBottom': typeof import("../node_modules/lucide-vue-next")['PanelBottom']
    'LucidePanelBottomClose': typeof import("../node_modules/lucide-vue-next")['PanelBottomClose']
    'LucidePanelBottomDashed': typeof import("../node_modules/lucide-vue-next")['PanelBottomDashed']
    'LucidePanelBottomInactive': typeof import("../node_modules/lucide-vue-next")['PanelBottomInactive']
    'LucidePanelBottomOpen': typeof import("../node_modules/lucide-vue-next")['PanelBottomOpen']
    'LucidePanelLeft': typeof import("../node_modules/lucide-vue-next")['PanelLeft']
    'LucidePanelLeftClose': typeof import("../node_modules/lucide-vue-next")['PanelLeftClose']
    'LucidePanelLeftDashed': typeof import("../node_modules/lucide-vue-next")['PanelLeftDashed']
    'LucidePanelLeftInactive': typeof import("../node_modules/lucide-vue-next")['PanelLeftInactive']
    'LucidePanelLeftOpen': typeof import("../node_modules/lucide-vue-next")['PanelLeftOpen']
    'LucidePanelRight': typeof import("../node_modules/lucide-vue-next")['PanelRight']
    'LucidePanelRightClose': typeof import("../node_modules/lucide-vue-next")['PanelRightClose']
    'LucidePanelRightDashed': typeof import("../node_modules/lucide-vue-next")['PanelRightDashed']
    'LucidePanelRightInactive': typeof import("../node_modules/lucide-vue-next")['PanelRightInactive']
    'LucidePanelRightOpen': typeof import("../node_modules/lucide-vue-next")['PanelRightOpen']
    'LucidePanelTop': typeof import("../node_modules/lucide-vue-next")['PanelTop']
    'LucidePanelTopClose': typeof import("../node_modules/lucide-vue-next")['PanelTopClose']
    'LucidePanelTopDashed': typeof import("../node_modules/lucide-vue-next")['PanelTopDashed']
    'LucidePanelTopInactive': typeof import("../node_modules/lucide-vue-next")['PanelTopInactive']
    'LucidePanelTopOpen': typeof import("../node_modules/lucide-vue-next")['PanelTopOpen']
    'LucidePanelsLeftBottom': typeof import("../node_modules/lucide-vue-next")['PanelsLeftBottom']
    'LucidePanelsLeftRight': typeof import("../node_modules/lucide-vue-next")['PanelsLeftRight']
    'LucidePanelsRightBottom': typeof import("../node_modules/lucide-vue-next")['PanelsRightBottom']
    'LucidePanelsTopBottom': typeof import("../node_modules/lucide-vue-next")['PanelsTopBottom']
    'LucidePanelsTopLeft': typeof import("../node_modules/lucide-vue-next")['PanelsTopLeft']
    'LucidePaperclip': typeof import("../node_modules/lucide-vue-next")['Paperclip']
    'LucideParentheses': typeof import("../node_modules/lucide-vue-next")['Parentheses']
    'LucideParkingCircle': typeof import("../node_modules/lucide-vue-next")['ParkingCircle']
    'LucideParkingCircleOff': typeof import("../node_modules/lucide-vue-next")['ParkingCircleOff']
    'LucideParkingMeter': typeof import("../node_modules/lucide-vue-next")['ParkingMeter']
    'LucideParkingSquare': typeof import("../node_modules/lucide-vue-next")['ParkingSquare']
    'LucideParkingSquareOff': typeof import("../node_modules/lucide-vue-next")['ParkingSquareOff']
    'LucidePartyPopper': typeof import("../node_modules/lucide-vue-next")['PartyPopper']
    'LucidePause': typeof import("../node_modules/lucide-vue-next")['Pause']
    'LucidePauseCircle': typeof import("../node_modules/lucide-vue-next")['PauseCircle']
    'LucidePauseOctagon': typeof import("../node_modules/lucide-vue-next")['PauseOctagon']
    'LucidePawPrint': typeof import("../node_modules/lucide-vue-next")['PawPrint']
    'LucidePcCase': typeof import("../node_modules/lucide-vue-next")['PcCase']
    'LucidePen': typeof import("../node_modules/lucide-vue-next")['Pen']
    'LucidePenBox': typeof import("../node_modules/lucide-vue-next")['PenBox']
    'LucidePenLine': typeof import("../node_modules/lucide-vue-next")['PenLine']
    'LucidePenOff': typeof import("../node_modules/lucide-vue-next")['PenOff']
    'LucidePenSquare': typeof import("../node_modules/lucide-vue-next")['PenSquare']
    'LucidePenTool': typeof import("../node_modules/lucide-vue-next")['PenTool']
    'LucidePencil': typeof import("../node_modules/lucide-vue-next")['Pencil']
    'LucidePencilLine': typeof import("../node_modules/lucide-vue-next")['PencilLine']
    'LucidePencilOff': typeof import("../node_modules/lucide-vue-next")['PencilOff']
    'LucidePencilRuler': typeof import("../node_modules/lucide-vue-next")['PencilRuler']
    'LucidePentagon': typeof import("../node_modules/lucide-vue-next")['Pentagon']
    'LucidePercent': typeof import("../node_modules/lucide-vue-next")['Percent']
    'LucidePercentCircle': typeof import("../node_modules/lucide-vue-next")['PercentCircle']
    'LucidePercentDiamond': typeof import("../node_modules/lucide-vue-next")['PercentDiamond']
    'LucidePercentSquare': typeof import("../node_modules/lucide-vue-next")['PercentSquare']
    'LucidePersonStanding': typeof import("../node_modules/lucide-vue-next")['PersonStanding']
    'LucidePhilippinePeso': typeof import("../node_modules/lucide-vue-next")['PhilippinePeso']
    'LucidePhone': typeof import("../node_modules/lucide-vue-next")['Phone']
    'LucidePhoneCall': typeof import("../node_modules/lucide-vue-next")['PhoneCall']
    'LucidePhoneForwarded': typeof import("../node_modules/lucide-vue-next")['PhoneForwarded']
    'LucidePhoneIncoming': typeof import("../node_modules/lucide-vue-next")['PhoneIncoming']
    'LucidePhoneMissed': typeof import("../node_modules/lucide-vue-next")['PhoneMissed']
    'LucidePhoneOff': typeof import("../node_modules/lucide-vue-next")['PhoneOff']
    'LucidePhoneOutgoing': typeof import("../node_modules/lucide-vue-next")['PhoneOutgoing']
    'LucidePi': typeof import("../node_modules/lucide-vue-next")['Pi']
    'LucidePiSquare': typeof import("../node_modules/lucide-vue-next")['PiSquare']
    'LucidePiano': typeof import("../node_modules/lucide-vue-next")['Piano']
    'LucidePickaxe': typeof import("../node_modules/lucide-vue-next")['Pickaxe']
    'LucidePictureInPicture': typeof import("../node_modules/lucide-vue-next")['PictureInPicture']
    'LucidePictureInPicture2': typeof import("../node_modules/lucide-vue-next")['PictureInPicture2']
    'LucidePieChart': typeof import("../node_modules/lucide-vue-next")['PieChart']
    'LucidePiggyBank': typeof import("../node_modules/lucide-vue-next")['PiggyBank']
    'LucidePilcrow': typeof import("../node_modules/lucide-vue-next")['Pilcrow']
    'LucidePilcrowLeft': typeof import("../node_modules/lucide-vue-next")['PilcrowLeft']
    'LucidePilcrowRight': typeof import("../node_modules/lucide-vue-next")['PilcrowRight']
    'LucidePilcrowSquare': typeof import("../node_modules/lucide-vue-next")['PilcrowSquare']
    'LucidePill': typeof import("../node_modules/lucide-vue-next")['Pill']
    'LucidePillBottle': typeof import("../node_modules/lucide-vue-next")['PillBottle']
    'LucidePin': typeof import("../node_modules/lucide-vue-next")['Pin']
    'LucidePinOff': typeof import("../node_modules/lucide-vue-next")['PinOff']
    'LucidePipette': typeof import("../node_modules/lucide-vue-next")['Pipette']
    'LucidePizza': typeof import("../node_modules/lucide-vue-next")['Pizza']
    'LucidePlane': typeof import("../node_modules/lucide-vue-next")['Plane']
    'LucidePlaneLanding': typeof import("../node_modules/lucide-vue-next")['PlaneLanding']
    'LucidePlaneTakeoff': typeof import("../node_modules/lucide-vue-next")['PlaneTakeoff']
    'LucidePlay': typeof import("../node_modules/lucide-vue-next")['Play']
    'LucidePlayCircle': typeof import("../node_modules/lucide-vue-next")['PlayCircle']
    'LucidePlaySquare': typeof import("../node_modules/lucide-vue-next")['PlaySquare']
    'LucidePlug': typeof import("../node_modules/lucide-vue-next")['Plug']
    'LucidePlug2': typeof import("../node_modules/lucide-vue-next")['Plug2']
    'LucidePlugZap': typeof import("../node_modules/lucide-vue-next")['PlugZap']
    'LucidePlugZap2': typeof import("../node_modules/lucide-vue-next")['PlugZap2']
    'LucidePlus': typeof import("../node_modules/lucide-vue-next")['Plus']
    'LucidePlusCircle': typeof import("../node_modules/lucide-vue-next")['PlusCircle']
    'LucidePlusSquare': typeof import("../node_modules/lucide-vue-next")['PlusSquare']
    'LucidePocket': typeof import("../node_modules/lucide-vue-next")['Pocket']
    'LucidePocketKnife': typeof import("../node_modules/lucide-vue-next")['PocketKnife']
    'LucidePodcast': typeof import("../node_modules/lucide-vue-next")['Podcast']
    'LucidePointer': typeof import("../node_modules/lucide-vue-next")['Pointer']
    'LucidePointerOff': typeof import("../node_modules/lucide-vue-next")['PointerOff']
    'LucidePopcorn': typeof import("../node_modules/lucide-vue-next")['Popcorn']
    'LucidePopsicle': typeof import("../node_modules/lucide-vue-next")['Popsicle']
    'LucidePoundSterling': typeof import("../node_modules/lucide-vue-next")['PoundSterling']
    'LucidePower': typeof import("../node_modules/lucide-vue-next")['Power']
    'LucidePowerCircle': typeof import("../node_modules/lucide-vue-next")['PowerCircle']
    'LucidePowerOff': typeof import("../node_modules/lucide-vue-next")['PowerOff']
    'LucidePowerSquare': typeof import("../node_modules/lucide-vue-next")['PowerSquare']
    'LucidePresentation': typeof import("../node_modules/lucide-vue-next")['Presentation']
    'LucidePrinter': typeof import("../node_modules/lucide-vue-next")['Printer']
    'LucidePrinterCheck': typeof import("../node_modules/lucide-vue-next")['PrinterCheck']
    'LucideProjector': typeof import("../node_modules/lucide-vue-next")['Projector']
    'LucideProportions': typeof import("../node_modules/lucide-vue-next")['Proportions']
    'LucidePuzzle': typeof import("../node_modules/lucide-vue-next")['Puzzle']
    'LucidePyramid': typeof import("../node_modules/lucide-vue-next")['Pyramid']
    'LucideQrCode': typeof import("../node_modules/lucide-vue-next")['QrCode']
    'LucideQuote': typeof import("../node_modules/lucide-vue-next")['Quote']
    'LucideRabbit': typeof import("../node_modules/lucide-vue-next")['Rabbit']
    'LucideRadar': typeof import("../node_modules/lucide-vue-next")['Radar']
    'LucideRadiation': typeof import("../node_modules/lucide-vue-next")['Radiation']
    'LucideRadical': typeof import("../node_modules/lucide-vue-next")['Radical']
    'LucideRadio': typeof import("../node_modules/lucide-vue-next")['Radio']
    'LucideRadioReceiver': typeof import("../node_modules/lucide-vue-next")['RadioReceiver']
    'LucideRadioTower': typeof import("../node_modules/lucide-vue-next")['RadioTower']
    'LucideRadius': typeof import("../node_modules/lucide-vue-next")['Radius']
    'LucideRailSymbol': typeof import("../node_modules/lucide-vue-next")['RailSymbol']
    'LucideRainbow': typeof import("../node_modules/lucide-vue-next")['Rainbow']
    'LucideRat': typeof import("../node_modules/lucide-vue-next")['Rat']
    'LucideRatio': typeof import("../node_modules/lucide-vue-next")['Ratio']
    'LucideReceipt': typeof import("../node_modules/lucide-vue-next")['Receipt']
    'LucideReceiptCent': typeof import("../node_modules/lucide-vue-next")['ReceiptCent']
    'LucideReceiptEuro': typeof import("../node_modules/lucide-vue-next")['ReceiptEuro']
    'LucideReceiptIndianRupee': typeof import("../node_modules/lucide-vue-next")['ReceiptIndianRupee']
    'LucideReceiptJapaneseYen': typeof import("../node_modules/lucide-vue-next")['ReceiptJapaneseYen']
    'LucideReceiptPoundSterling': typeof import("../node_modules/lucide-vue-next")['ReceiptPoundSterling']
    'LucideReceiptRussianRuble': typeof import("../node_modules/lucide-vue-next")['ReceiptRussianRuble']
    'LucideReceiptSwissFranc': typeof import("../node_modules/lucide-vue-next")['ReceiptSwissFranc']
    'LucideReceiptText': typeof import("../node_modules/lucide-vue-next")['ReceiptText']
    'LucideRectangleEllipsis': typeof import("../node_modules/lucide-vue-next")['RectangleEllipsis']
    'LucideRectangleHorizontal': typeof import("../node_modules/lucide-vue-next")['RectangleHorizontal']
    'LucideRectangleVertical': typeof import("../node_modules/lucide-vue-next")['RectangleVertical']
    'LucideRecycle': typeof import("../node_modules/lucide-vue-next")['Recycle']
    'LucideRedo': typeof import("../node_modules/lucide-vue-next")['Redo']
    'LucideRedo2': typeof import("../node_modules/lucide-vue-next")['Redo2']
    'LucideRedoDot': typeof import("../node_modules/lucide-vue-next")['RedoDot']
    'LucideRefreshCcw': typeof import("../node_modules/lucide-vue-next")['RefreshCcw']
    'LucideRefreshCcwDot': typeof import("../node_modules/lucide-vue-next")['RefreshCcwDot']
    'LucideRefreshCw': typeof import("../node_modules/lucide-vue-next")['RefreshCw']
    'LucideRefreshCwOff': typeof import("../node_modules/lucide-vue-next")['RefreshCwOff']
    'LucideRefrigerator': typeof import("../node_modules/lucide-vue-next")['Refrigerator']
    'LucideRegex': typeof import("../node_modules/lucide-vue-next")['Regex']
    'LucideRemoveFormatting': typeof import("../node_modules/lucide-vue-next")['RemoveFormatting']
    'LucideRepeat': typeof import("../node_modules/lucide-vue-next")['Repeat']
    'LucideRepeat1': typeof import("../node_modules/lucide-vue-next")['Repeat1']
    'LucideRepeat2': typeof import("../node_modules/lucide-vue-next")['Repeat2']
    'LucideReplace': typeof import("../node_modules/lucide-vue-next")['Replace']
    'LucideReplaceAll': typeof import("../node_modules/lucide-vue-next")['ReplaceAll']
    'LucideReply': typeof import("../node_modules/lucide-vue-next")['Reply']
    'LucideReplyAll': typeof import("../node_modules/lucide-vue-next")['ReplyAll']
    'LucideRewind': typeof import("../node_modules/lucide-vue-next")['Rewind']
    'LucideRibbon': typeof import("../node_modules/lucide-vue-next")['Ribbon']
    'LucideRocket': typeof import("../node_modules/lucide-vue-next")['Rocket']
    'LucideRockingChair': typeof import("../node_modules/lucide-vue-next")['RockingChair']
    'LucideRollerCoaster': typeof import("../node_modules/lucide-vue-next")['RollerCoaster']
    'LucideRotate3d': typeof import("../node_modules/lucide-vue-next")['Rotate3d']
    'LucideRotateCcw': typeof import("../node_modules/lucide-vue-next")['RotateCcw']
    'LucideRotateCcwSquare': typeof import("../node_modules/lucide-vue-next")['RotateCcwSquare']
    'LucideRotateCw': typeof import("../node_modules/lucide-vue-next")['RotateCw']
    'LucideRotateCwSquare': typeof import("../node_modules/lucide-vue-next")['RotateCwSquare']
    'LucideRoute': typeof import("../node_modules/lucide-vue-next")['Route']
    'LucideRouteOff': typeof import("../node_modules/lucide-vue-next")['RouteOff']
    'LucideRouter': typeof import("../node_modules/lucide-vue-next")['Router']
    'LucideRows': typeof import("../node_modules/lucide-vue-next")['Rows']
    'LucideRows2': typeof import("../node_modules/lucide-vue-next")['Rows2']
    'LucideRows3': typeof import("../node_modules/lucide-vue-next")['Rows3']
    'LucideRows4': typeof import("../node_modules/lucide-vue-next")['Rows4']
    'LucideRss': typeof import("../node_modules/lucide-vue-next")['Rss']
    'LucideRuler': typeof import("../node_modules/lucide-vue-next")['Ruler']
    'LucideRussianRuble': typeof import("../node_modules/lucide-vue-next")['RussianRuble']
    'LucideSailboat': typeof import("../node_modules/lucide-vue-next")['Sailboat']
    'LucideSalad': typeof import("../node_modules/lucide-vue-next")['Salad']
    'LucideSandwich': typeof import("../node_modules/lucide-vue-next")['Sandwich']
    'LucideSatellite': typeof import("../node_modules/lucide-vue-next")['Satellite']
    'LucideSatelliteDish': typeof import("../node_modules/lucide-vue-next")['SatelliteDish']
    'LucideSaudiRiyal': typeof import("../node_modules/lucide-vue-next")['SaudiRiyal']
    'LucideSave': typeof import("../node_modules/lucide-vue-next")['Save']
    'LucideSaveAll': typeof import("../node_modules/lucide-vue-next")['SaveAll']
    'LucideSaveOff': typeof import("../node_modules/lucide-vue-next")['SaveOff']
    'LucideScale': typeof import("../node_modules/lucide-vue-next")['Scale']
    'LucideScale3d': typeof import("../node_modules/lucide-vue-next")['Scale3d']
    'LucideScaling': typeof import("../node_modules/lucide-vue-next")['Scaling']
    'LucideScan': typeof import("../node_modules/lucide-vue-next")['Scan']
    'LucideScanBarcode': typeof import("../node_modules/lucide-vue-next")['ScanBarcode']
    'LucideScanEye': typeof import("../node_modules/lucide-vue-next")['ScanEye']
    'LucideScanFace': typeof import("../node_modules/lucide-vue-next")['ScanFace']
    'LucideScanHeart': typeof import("../node_modules/lucide-vue-next")['ScanHeart']
    'LucideScanLine': typeof import("../node_modules/lucide-vue-next")['ScanLine']
    'LucideScanQrCode': typeof import("../node_modules/lucide-vue-next")['ScanQrCode']
    'LucideScanSearch': typeof import("../node_modules/lucide-vue-next")['ScanSearch']
    'LucideScanText': typeof import("../node_modules/lucide-vue-next")['ScanText']
    'LucideScatterChart': typeof import("../node_modules/lucide-vue-next")['ScatterChart']
    'LucideSchool': typeof import("../node_modules/lucide-vue-next")['School']
    'LucideSchool2': typeof import("../node_modules/lucide-vue-next")['School2']
    'LucideScissors': typeof import("../node_modules/lucide-vue-next")['Scissors']
    'LucideScissorsLineDashed': typeof import("../node_modules/lucide-vue-next")['ScissorsLineDashed']
    'LucideScissorsSquare': typeof import("../node_modules/lucide-vue-next")['ScissorsSquare']
    'LucideScissorsSquareDashedBottom': typeof import("../node_modules/lucide-vue-next")['ScissorsSquareDashedBottom']
    'LucideScreenShare': typeof import("../node_modules/lucide-vue-next")['ScreenShare']
    'LucideScreenShareOff': typeof import("../node_modules/lucide-vue-next")['ScreenShareOff']
    'LucideScroll': typeof import("../node_modules/lucide-vue-next")['Scroll']
    'LucideScrollText': typeof import("../node_modules/lucide-vue-next")['ScrollText']
    'LucideSearch': typeof import("../node_modules/lucide-vue-next")['Search']
    'LucideSearchCheck': typeof import("../node_modules/lucide-vue-next")['SearchCheck']
    'LucideSearchCode': typeof import("../node_modules/lucide-vue-next")['SearchCode']
    'LucideSearchSlash': typeof import("../node_modules/lucide-vue-next")['SearchSlash']
    'LucideSearchX': typeof import("../node_modules/lucide-vue-next")['SearchX']
    'LucideSection': typeof import("../node_modules/lucide-vue-next")['Section']
    'LucideSend': typeof import("../node_modules/lucide-vue-next")['Send']
    'LucideSendHorizonal': typeof import("../node_modules/lucide-vue-next")['SendHorizonal']
    'LucideSendHorizontal': typeof import("../node_modules/lucide-vue-next")['SendHorizontal']
    'LucideSendToBack': typeof import("../node_modules/lucide-vue-next")['SendToBack']
    'LucideSeparatorHorizontal': typeof import("../node_modules/lucide-vue-next")['SeparatorHorizontal']
    'LucideSeparatorVertical': typeof import("../node_modules/lucide-vue-next")['SeparatorVertical']
    'LucideServer': typeof import("../node_modules/lucide-vue-next")['Server']
    'LucideServerCog': typeof import("../node_modules/lucide-vue-next")['ServerCog']
    'LucideServerCrash': typeof import("../node_modules/lucide-vue-next")['ServerCrash']
    'LucideServerOff': typeof import("../node_modules/lucide-vue-next")['ServerOff']
    'LucideSettings': typeof import("../node_modules/lucide-vue-next")['Settings']
    'LucideSettings2': typeof import("../node_modules/lucide-vue-next")['Settings2']
    'LucideShapes': typeof import("../node_modules/lucide-vue-next")['Shapes']
    'LucideShare': typeof import("../node_modules/lucide-vue-next")['Share']
    'LucideShare2': typeof import("../node_modules/lucide-vue-next")['Share2']
    'LucideSheet': typeof import("../node_modules/lucide-vue-next")['Sheet']
    'LucideShell': typeof import("../node_modules/lucide-vue-next")['Shell']
    'LucideShield': typeof import("../node_modules/lucide-vue-next")['Shield']
    'LucideShieldAlert': typeof import("../node_modules/lucide-vue-next")['ShieldAlert']
    'LucideShieldBan': typeof import("../node_modules/lucide-vue-next")['ShieldBan']
    'LucideShieldCheck': typeof import("../node_modules/lucide-vue-next")['ShieldCheck']
    'LucideShieldClose': typeof import("../node_modules/lucide-vue-next")['ShieldClose']
    'LucideShieldEllipsis': typeof import("../node_modules/lucide-vue-next")['ShieldEllipsis']
    'LucideShieldHalf': typeof import("../node_modules/lucide-vue-next")['ShieldHalf']
    'LucideShieldMinus': typeof import("../node_modules/lucide-vue-next")['ShieldMinus']
    'LucideShieldOff': typeof import("../node_modules/lucide-vue-next")['ShieldOff']
    'LucideShieldPlus': typeof import("../node_modules/lucide-vue-next")['ShieldPlus']
    'LucideShieldQuestion': typeof import("../node_modules/lucide-vue-next")['ShieldQuestion']
    'LucideShieldUser': typeof import("../node_modules/lucide-vue-next")['ShieldUser']
    'LucideShieldX': typeof import("../node_modules/lucide-vue-next")['ShieldX']
    'LucideShip': typeof import("../node_modules/lucide-vue-next")['Ship']
    'LucideShipWheel': typeof import("../node_modules/lucide-vue-next")['ShipWheel']
    'LucideShirt': typeof import("../node_modules/lucide-vue-next")['Shirt']
    'LucideShoppingBag': typeof import("../node_modules/lucide-vue-next")['ShoppingBag']
    'LucideShoppingBasket': typeof import("../node_modules/lucide-vue-next")['ShoppingBasket']
    'LucideShoppingCart': typeof import("../node_modules/lucide-vue-next")['ShoppingCart']
    'LucideShovel': typeof import("../node_modules/lucide-vue-next")['Shovel']
    'LucideShowerHead': typeof import("../node_modules/lucide-vue-next")['ShowerHead']
    'LucideShrimp': typeof import("../node_modules/lucide-vue-next")['Shrimp']
    'LucideShrink': typeof import("../node_modules/lucide-vue-next")['Shrink']
    'LucideShrub': typeof import("../node_modules/lucide-vue-next")['Shrub']
    'LucideShuffle': typeof import("../node_modules/lucide-vue-next")['Shuffle']
    'LucideSidebar': typeof import("../node_modules/lucide-vue-next")['Sidebar']
    'LucideSidebarClose': typeof import("../node_modules/lucide-vue-next")['SidebarClose']
    'LucideSidebarOpen': typeof import("../node_modules/lucide-vue-next")['SidebarOpen']
    'LucideSigma': typeof import("../node_modules/lucide-vue-next")['Sigma']
    'LucideSigmaSquare': typeof import("../node_modules/lucide-vue-next")['SigmaSquare']
    'LucideSignal': typeof import("../node_modules/lucide-vue-next")['Signal']
    'LucideSignalHigh': typeof import("../node_modules/lucide-vue-next")['SignalHigh']
    'LucideSignalLow': typeof import("../node_modules/lucide-vue-next")['SignalLow']
    'LucideSignalMedium': typeof import("../node_modules/lucide-vue-next")['SignalMedium']
    'LucideSignalZero': typeof import("../node_modules/lucide-vue-next")['SignalZero']
    'LucideSignature': typeof import("../node_modules/lucide-vue-next")['Signature']
    'LucideSignpost': typeof import("../node_modules/lucide-vue-next")['Signpost']
    'LucideSignpostBig': typeof import("../node_modules/lucide-vue-next")['SignpostBig']
    'LucideSiren': typeof import("../node_modules/lucide-vue-next")['Siren']
    'LucideSkipBack': typeof import("../node_modules/lucide-vue-next")['SkipBack']
    'LucideSkipForward': typeof import("../node_modules/lucide-vue-next")['SkipForward']
    'LucideSkull': typeof import("../node_modules/lucide-vue-next")['Skull']
    'LucideSlack': typeof import("../node_modules/lucide-vue-next")['Slack']
    'LucideSlash': typeof import("../node_modules/lucide-vue-next")['Slash']
    'LucideSlashSquare': typeof import("../node_modules/lucide-vue-next")['SlashSquare']
    'LucideSlice': typeof import("../node_modules/lucide-vue-next")['Slice']
    'LucideSliders': typeof import("../node_modules/lucide-vue-next")['Sliders']
    'LucideSlidersHorizontal': typeof import("../node_modules/lucide-vue-next")['SlidersHorizontal']
    'LucideSlidersVertical': typeof import("../node_modules/lucide-vue-next")['SlidersVertical']
    'LucideSmartphone': typeof import("../node_modules/lucide-vue-next")['Smartphone']
    'LucideSmartphoneCharging': typeof import("../node_modules/lucide-vue-next")['SmartphoneCharging']
    'LucideSmartphoneNfc': typeof import("../node_modules/lucide-vue-next")['SmartphoneNfc']
    'LucideSmile': typeof import("../node_modules/lucide-vue-next")['Smile']
    'LucideSmilePlus': typeof import("../node_modules/lucide-vue-next")['SmilePlus']
    'LucideSnail': typeof import("../node_modules/lucide-vue-next")['Snail']
    'LucideSnowflake': typeof import("../node_modules/lucide-vue-next")['Snowflake']
    'LucideSofa': typeof import("../node_modules/lucide-vue-next")['Sofa']
    'LucideSortAsc': typeof import("../node_modules/lucide-vue-next")['SortAsc']
    'LucideSortDesc': typeof import("../node_modules/lucide-vue-next")['SortDesc']
    'LucideSoup': typeof import("../node_modules/lucide-vue-next")['Soup']
    'LucideSpace': typeof import("../node_modules/lucide-vue-next")['Space']
    'LucideSpade': typeof import("../node_modules/lucide-vue-next")['Spade']
    'LucideSparkle': typeof import("../node_modules/lucide-vue-next")['Sparkle']
    'LucideSparkles': typeof import("../node_modules/lucide-vue-next")['Sparkles']
    'LucideSpeaker': typeof import("../node_modules/lucide-vue-next")['Speaker']
    'LucideSpeech': typeof import("../node_modules/lucide-vue-next")['Speech']
    'LucideSpellCheck': typeof import("../node_modules/lucide-vue-next")['SpellCheck']
    'LucideSpellCheck2': typeof import("../node_modules/lucide-vue-next")['SpellCheck2']
    'LucideSpline': typeof import("../node_modules/lucide-vue-next")['Spline']
    'LucideSplinePointer': typeof import("../node_modules/lucide-vue-next")['SplinePointer']
    'LucideSplit': typeof import("../node_modules/lucide-vue-next")['Split']
    'LucideSplitSquareHorizontal': typeof import("../node_modules/lucide-vue-next")['SplitSquareHorizontal']
    'LucideSplitSquareVertical': typeof import("../node_modules/lucide-vue-next")['SplitSquareVertical']
    'LucideSprayCan': typeof import("../node_modules/lucide-vue-next")['SprayCan']
    'LucideSprout': typeof import("../node_modules/lucide-vue-next")['Sprout']
    'LucideSquare': typeof import("../node_modules/lucide-vue-next")['Square']
    'LucideSquareActivity': typeof import("../node_modules/lucide-vue-next")['SquareActivity']
    'LucideSquareArrowDown': typeof import("../node_modules/lucide-vue-next")['SquareArrowDown']
    'LucideSquareArrowDownLeft': typeof import("../node_modules/lucide-vue-next")['SquareArrowDownLeft']
    'LucideSquareArrowDownRight': typeof import("../node_modules/lucide-vue-next")['SquareArrowDownRight']
    'LucideSquareArrowLeft': typeof import("../node_modules/lucide-vue-next")['SquareArrowLeft']
    'LucideSquareArrowOutDownLeft': typeof import("../node_modules/lucide-vue-next")['SquareArrowOutDownLeft']
    'LucideSquareArrowOutDownRight': typeof import("../node_modules/lucide-vue-next")['SquareArrowOutDownRight']
    'LucideSquareArrowOutUpLeft': typeof import("../node_modules/lucide-vue-next")['SquareArrowOutUpLeft']
    'LucideSquareArrowOutUpRight': typeof import("../node_modules/lucide-vue-next")['SquareArrowOutUpRight']
    'LucideSquareArrowRight': typeof import("../node_modules/lucide-vue-next")['SquareArrowRight']
    'LucideSquareArrowUp': typeof import("../node_modules/lucide-vue-next")['SquareArrowUp']
    'LucideSquareArrowUpLeft': typeof import("../node_modules/lucide-vue-next")['SquareArrowUpLeft']
    'LucideSquareArrowUpRight': typeof import("../node_modules/lucide-vue-next")['SquareArrowUpRight']
    'LucideSquareAsterisk': typeof import("../node_modules/lucide-vue-next")['SquareAsterisk']
    'LucideSquareBottomDashedScissors': typeof import("../node_modules/lucide-vue-next")['SquareBottomDashedScissors']
    'LucideSquareChartGantt': typeof import("../node_modules/lucide-vue-next")['SquareChartGantt']
    'LucideSquareCheck': typeof import("../node_modules/lucide-vue-next")['SquareCheck']
    'LucideSquareCheckBig': typeof import("../node_modules/lucide-vue-next")['SquareCheckBig']
    'LucideSquareChevronDown': typeof import("../node_modules/lucide-vue-next")['SquareChevronDown']
    'LucideSquareChevronLeft': typeof import("../node_modules/lucide-vue-next")['SquareChevronLeft']
    'LucideSquareChevronRight': typeof import("../node_modules/lucide-vue-next")['SquareChevronRight']
    'LucideSquareChevronUp': typeof import("../node_modules/lucide-vue-next")['SquareChevronUp']
    'LucideSquareCode': typeof import("../node_modules/lucide-vue-next")['SquareCode']
    'LucideSquareDashed': typeof import("../node_modules/lucide-vue-next")['SquareDashed']
    'LucideSquareDashedBottom': typeof import("../node_modules/lucide-vue-next")['SquareDashedBottom']
    'LucideSquareDashedBottomCode': typeof import("../node_modules/lucide-vue-next")['SquareDashedBottomCode']
    'LucideSquareDashedKanban': typeof import("../node_modules/lucide-vue-next")['SquareDashedKanban']
    'LucideSquareDashedMousePointer': typeof import("../node_modules/lucide-vue-next")['SquareDashedMousePointer']
    'LucideSquareDivide': typeof import("../node_modules/lucide-vue-next")['SquareDivide']
    'LucideSquareDot': typeof import("../node_modules/lucide-vue-next")['SquareDot']
    'LucideSquareEqual': typeof import("../node_modules/lucide-vue-next")['SquareEqual']
    'LucideSquareFunction': typeof import("../node_modules/lucide-vue-next")['SquareFunction']
    'LucideSquareGanttChart': typeof import("../node_modules/lucide-vue-next")['SquareGanttChart']
    'LucideSquareKanban': typeof import("../node_modules/lucide-vue-next")['SquareKanban']
    'LucideSquareLibrary': typeof import("../node_modules/lucide-vue-next")['SquareLibrary']
    'LucideSquareM': typeof import("../node_modules/lucide-vue-next")['SquareM']
    'LucideSquareMenu': typeof import("../node_modules/lucide-vue-next")['SquareMenu']
    'LucideSquareMinus': typeof import("../node_modules/lucide-vue-next")['SquareMinus']
    'LucideSquareMousePointer': typeof import("../node_modules/lucide-vue-next")['SquareMousePointer']
    'LucideSquareParking': typeof import("../node_modules/lucide-vue-next")['SquareParking']
    'LucideSquareParkingOff': typeof import("../node_modules/lucide-vue-next")['SquareParkingOff']
    'LucideSquarePen': typeof import("../node_modules/lucide-vue-next")['SquarePen']
    'LucideSquarePercent': typeof import("../node_modules/lucide-vue-next")['SquarePercent']
    'LucideSquarePi': typeof import("../node_modules/lucide-vue-next")['SquarePi']
    'LucideSquarePilcrow': typeof import("../node_modules/lucide-vue-next")['SquarePilcrow']
    'LucideSquarePlay': typeof import("../node_modules/lucide-vue-next")['SquarePlay']
    'LucideSquarePlus': typeof import("../node_modules/lucide-vue-next")['SquarePlus']
    'LucideSquarePower': typeof import("../node_modules/lucide-vue-next")['SquarePower']
    'LucideSquareRadical': typeof import("../node_modules/lucide-vue-next")['SquareRadical']
    'LucideSquareRoundCorner': typeof import("../node_modules/lucide-vue-next")['SquareRoundCorner']
    'LucideSquareScissors': typeof import("../node_modules/lucide-vue-next")['SquareScissors']
    'LucideSquareSigma': typeof import("../node_modules/lucide-vue-next")['SquareSigma']
    'LucideSquareSlash': typeof import("../node_modules/lucide-vue-next")['SquareSlash']
    'LucideSquareSplitHorizontal': typeof import("../node_modules/lucide-vue-next")['SquareSplitHorizontal']
    'LucideSquareSplitVertical': typeof import("../node_modules/lucide-vue-next")['SquareSplitVertical']
    'LucideSquareSquare': typeof import("../node_modules/lucide-vue-next")['SquareSquare']
    'LucideSquareStack': typeof import("../node_modules/lucide-vue-next")['SquareStack']
    'LucideSquareTerminal': typeof import("../node_modules/lucide-vue-next")['SquareTerminal']
    'LucideSquareUser': typeof import("../node_modules/lucide-vue-next")['SquareUser']
    'LucideSquareUserRound': typeof import("../node_modules/lucide-vue-next")['SquareUserRound']
    'LucideSquareX': typeof import("../node_modules/lucide-vue-next")['SquareX']
    'LucideSquircle': typeof import("../node_modules/lucide-vue-next")['Squircle']
    'LucideSquirrel': typeof import("../node_modules/lucide-vue-next")['Squirrel']
    'LucideStamp': typeof import("../node_modules/lucide-vue-next")['Stamp']
    'LucideStar': typeof import("../node_modules/lucide-vue-next")['Star']
    'LucideStarHalf': typeof import("../node_modules/lucide-vue-next")['StarHalf']
    'LucideStarOff': typeof import("../node_modules/lucide-vue-next")['StarOff']
    'LucideStars': typeof import("../node_modules/lucide-vue-next")['Stars']
    'LucideStepBack': typeof import("../node_modules/lucide-vue-next")['StepBack']
    'LucideStepForward': typeof import("../node_modules/lucide-vue-next")['StepForward']
    'LucideStethoscope': typeof import("../node_modules/lucide-vue-next")['Stethoscope']
    'LucideSticker': typeof import("../node_modules/lucide-vue-next")['Sticker']
    'LucideStickyNote': typeof import("../node_modules/lucide-vue-next")['StickyNote']
    'LucideStopCircle': typeof import("../node_modules/lucide-vue-next")['StopCircle']
    'LucideStore': typeof import("../node_modules/lucide-vue-next")['Store']
    'LucideStretchHorizontal': typeof import("../node_modules/lucide-vue-next")['StretchHorizontal']
    'LucideStretchVertical': typeof import("../node_modules/lucide-vue-next")['StretchVertical']
    'LucideStrikethrough': typeof import("../node_modules/lucide-vue-next")['Strikethrough']
    'LucideSubscript': typeof import("../node_modules/lucide-vue-next")['Subscript']
    'LucideSubtitles': typeof import("../node_modules/lucide-vue-next")['Subtitles']
    'LucideSun': typeof import("../node_modules/lucide-vue-next")['Sun']
    'LucideSunDim': typeof import("../node_modules/lucide-vue-next")['SunDim']
    'LucideSunMedium': typeof import("../node_modules/lucide-vue-next")['SunMedium']
    'LucideSunMoon': typeof import("../node_modules/lucide-vue-next")['SunMoon']
    'LucideSunSnow': typeof import("../node_modules/lucide-vue-next")['SunSnow']
    'LucideSunrise': typeof import("../node_modules/lucide-vue-next")['Sunrise']
    'LucideSunset': typeof import("../node_modules/lucide-vue-next")['Sunset']
    'LucideSuperscript': typeof import("../node_modules/lucide-vue-next")['Superscript']
    'LucideSwatchBook': typeof import("../node_modules/lucide-vue-next")['SwatchBook']
    'LucideSwissFranc': typeof import("../node_modules/lucide-vue-next")['SwissFranc']
    'LucideSwitchCamera': typeof import("../node_modules/lucide-vue-next")['SwitchCamera']
    'LucideSword': typeof import("../node_modules/lucide-vue-next")['Sword']
    'LucideSwords': typeof import("../node_modules/lucide-vue-next")['Swords']
    'LucideSyringe': typeof import("../node_modules/lucide-vue-next")['Syringe']
    'LucideTable': typeof import("../node_modules/lucide-vue-next")['Table']
    'LucideTable2': typeof import("../node_modules/lucide-vue-next")['Table2']
    'LucideTableCellsMerge': typeof import("../node_modules/lucide-vue-next")['TableCellsMerge']
    'LucideTableCellsSplit': typeof import("../node_modules/lucide-vue-next")['TableCellsSplit']
    'LucideTableColumnsSplit': typeof import("../node_modules/lucide-vue-next")['TableColumnsSplit']
    'LucideTableOfContents': typeof import("../node_modules/lucide-vue-next")['TableOfContents']
    'LucideTableProperties': typeof import("../node_modules/lucide-vue-next")['TableProperties']
    'LucideTableRowsSplit': typeof import("../node_modules/lucide-vue-next")['TableRowsSplit']
    'LucideTablet': typeof import("../node_modules/lucide-vue-next")['Tablet']
    'LucideTabletSmartphone': typeof import("../node_modules/lucide-vue-next")['TabletSmartphone']
    'LucideTablets': typeof import("../node_modules/lucide-vue-next")['Tablets']
    'LucideTag': typeof import("../node_modules/lucide-vue-next")['Tag']
    'LucideTags': typeof import("../node_modules/lucide-vue-next")['Tags']
    'LucideTally1': typeof import("../node_modules/lucide-vue-next")['Tally1']
    'LucideTally2': typeof import("../node_modules/lucide-vue-next")['Tally2']
    'LucideTally3': typeof import("../node_modules/lucide-vue-next")['Tally3']
    'LucideTally4': typeof import("../node_modules/lucide-vue-next")['Tally4']
    'LucideTally5': typeof import("../node_modules/lucide-vue-next")['Tally5']
    'LucideTangent': typeof import("../node_modules/lucide-vue-next")['Tangent']
    'LucideTarget': typeof import("../node_modules/lucide-vue-next")['Target']
    'LucideTelescope': typeof import("../node_modules/lucide-vue-next")['Telescope']
    'LucideTent': typeof import("../node_modules/lucide-vue-next")['Tent']
    'LucideTentTree': typeof import("../node_modules/lucide-vue-next")['TentTree']
    'LucideTerminal': typeof import("../node_modules/lucide-vue-next")['Terminal']
    'LucideTerminalSquare': typeof import("../node_modules/lucide-vue-next")['TerminalSquare']
    'LucideTestTube': typeof import("../node_modules/lucide-vue-next")['TestTube']
    'LucideTestTube2': typeof import("../node_modules/lucide-vue-next")['TestTube2']
    'LucideTestTubeDiagonal': typeof import("../node_modules/lucide-vue-next")['TestTubeDiagonal']
    'LucideTestTubes': typeof import("../node_modules/lucide-vue-next")['TestTubes']
    'LucideText': typeof import("../node_modules/lucide-vue-next")['Text']
    'LucideTextCursor': typeof import("../node_modules/lucide-vue-next")['TextCursor']
    'LucideTextCursorInput': typeof import("../node_modules/lucide-vue-next")['TextCursorInput']
    'LucideTextQuote': typeof import("../node_modules/lucide-vue-next")['TextQuote']
    'LucideTextSearch': typeof import("../node_modules/lucide-vue-next")['TextSearch']
    'LucideTextSelect': typeof import("../node_modules/lucide-vue-next")['TextSelect']
    'LucideTextSelection': typeof import("../node_modules/lucide-vue-next")['TextSelection']
    'LucideTheater': typeof import("../node_modules/lucide-vue-next")['Theater']
    'LucideThermometer': typeof import("../node_modules/lucide-vue-next")['Thermometer']
    'LucideThermometerSnowflake': typeof import("../node_modules/lucide-vue-next")['ThermometerSnowflake']
    'LucideThermometerSun': typeof import("../node_modules/lucide-vue-next")['ThermometerSun']
    'LucideThumbsDown': typeof import("../node_modules/lucide-vue-next")['ThumbsDown']
    'LucideThumbsUp': typeof import("../node_modules/lucide-vue-next")['ThumbsUp']
    'LucideTicket': typeof import("../node_modules/lucide-vue-next")['Ticket']
    'LucideTicketCheck': typeof import("../node_modules/lucide-vue-next")['TicketCheck']
    'LucideTicketMinus': typeof import("../node_modules/lucide-vue-next")['TicketMinus']
    'LucideTicketPercent': typeof import("../node_modules/lucide-vue-next")['TicketPercent']
    'LucideTicketPlus': typeof import("../node_modules/lucide-vue-next")['TicketPlus']
    'LucideTicketSlash': typeof import("../node_modules/lucide-vue-next")['TicketSlash']
    'LucideTicketX': typeof import("../node_modules/lucide-vue-next")['TicketX']
    'LucideTickets': typeof import("../node_modules/lucide-vue-next")['Tickets']
    'LucideTicketsPlane': typeof import("../node_modules/lucide-vue-next")['TicketsPlane']
    'LucideTimer': typeof import("../node_modules/lucide-vue-next")['Timer']
    'LucideTimerOff': typeof import("../node_modules/lucide-vue-next")['TimerOff']
    'LucideTimerReset': typeof import("../node_modules/lucide-vue-next")['TimerReset']
    'LucideToggleLeft': typeof import("../node_modules/lucide-vue-next")['ToggleLeft']
    'LucideToggleRight': typeof import("../node_modules/lucide-vue-next")['ToggleRight']
    'LucideToilet': typeof import("../node_modules/lucide-vue-next")['Toilet']
    'LucideTornado': typeof import("../node_modules/lucide-vue-next")['Tornado']
    'LucideTorus': typeof import("../node_modules/lucide-vue-next")['Torus']
    'LucideTouchpad': typeof import("../node_modules/lucide-vue-next")['Touchpad']
    'LucideTouchpadOff': typeof import("../node_modules/lucide-vue-next")['TouchpadOff']
    'LucideTowerControl': typeof import("../node_modules/lucide-vue-next")['TowerControl']
    'LucideToyBrick': typeof import("../node_modules/lucide-vue-next")['ToyBrick']
    'LucideTractor': typeof import("../node_modules/lucide-vue-next")['Tractor']
    'LucideTrafficCone': typeof import("../node_modules/lucide-vue-next")['TrafficCone']
    'LucideTrain': typeof import("../node_modules/lucide-vue-next")['Train']
    'LucideTrainFront': typeof import("../node_modules/lucide-vue-next")['TrainFront']
    'LucideTrainFrontTunnel': typeof import("../node_modules/lucide-vue-next")['TrainFrontTunnel']
    'LucideTrainTrack': typeof import("../node_modules/lucide-vue-next")['TrainTrack']
    'LucideTramFront': typeof import("../node_modules/lucide-vue-next")['TramFront']
    'LucideTransgender': typeof import("../node_modules/lucide-vue-next")['Transgender']
    'LucideTrash': typeof import("../node_modules/lucide-vue-next")['Trash']
    'LucideTrash2': typeof import("../node_modules/lucide-vue-next")['Trash2']
    'LucideTreeDeciduous': typeof import("../node_modules/lucide-vue-next")['TreeDeciduous']
    'LucideTreePalm': typeof import("../node_modules/lucide-vue-next")['TreePalm']
    'LucideTreePine': typeof import("../node_modules/lucide-vue-next")['TreePine']
    'LucideTrees': typeof import("../node_modules/lucide-vue-next")['Trees']
    'LucideTrello': typeof import("../node_modules/lucide-vue-next")['Trello']
    'LucideTrendingDown': typeof import("../node_modules/lucide-vue-next")['TrendingDown']
    'LucideTrendingUp': typeof import("../node_modules/lucide-vue-next")['TrendingUp']
    'LucideTrendingUpDown': typeof import("../node_modules/lucide-vue-next")['TrendingUpDown']
    'LucideTriangle': typeof import("../node_modules/lucide-vue-next")['Triangle']
    'LucideTriangleAlert': typeof import("../node_modules/lucide-vue-next")['TriangleAlert']
    'LucideTriangleDashed': typeof import("../node_modules/lucide-vue-next")['TriangleDashed']
    'LucideTriangleRight': typeof import("../node_modules/lucide-vue-next")['TriangleRight']
    'LucideTrophy': typeof import("../node_modules/lucide-vue-next")['Trophy']
    'LucideTruck': typeof import("../node_modules/lucide-vue-next")['Truck']
    'LucideTurtle': typeof import("../node_modules/lucide-vue-next")['Turtle']
    'LucideTv': typeof import("../node_modules/lucide-vue-next")['Tv']
    'LucideTv2': typeof import("../node_modules/lucide-vue-next")['Tv2']
    'LucideTvMinimal': typeof import("../node_modules/lucide-vue-next")['TvMinimal']
    'LucideTvMinimalPlay': typeof import("../node_modules/lucide-vue-next")['TvMinimalPlay']
    'LucideTwitch': typeof import("../node_modules/lucide-vue-next")['Twitch']
    'LucideTwitter': typeof import("../node_modules/lucide-vue-next")['Twitter']
    'LucideType': typeof import("../node_modules/lucide-vue-next")['Type']
    'LucideTypeOutline': typeof import("../node_modules/lucide-vue-next")['TypeOutline']
    'LucideUmbrella': typeof import("../node_modules/lucide-vue-next")['Umbrella']
    'LucideUmbrellaOff': typeof import("../node_modules/lucide-vue-next")['UmbrellaOff']
    'LucideUnderline': typeof import("../node_modules/lucide-vue-next")['Underline']
    'LucideUndo': typeof import("../node_modules/lucide-vue-next")['Undo']
    'LucideUndo2': typeof import("../node_modules/lucide-vue-next")['Undo2']
    'LucideUndoDot': typeof import("../node_modules/lucide-vue-next")['UndoDot']
    'LucideUnfoldHorizontal': typeof import("../node_modules/lucide-vue-next")['UnfoldHorizontal']
    'LucideUnfoldVertical': typeof import("../node_modules/lucide-vue-next")['UnfoldVertical']
    'LucideUngroup': typeof import("../node_modules/lucide-vue-next")['Ungroup']
    'LucideUniversity': typeof import("../node_modules/lucide-vue-next")['University']
    'LucideUnlink': typeof import("../node_modules/lucide-vue-next")['Unlink']
    'LucideUnlink2': typeof import("../node_modules/lucide-vue-next")['Unlink2']
    'LucideUnlock': typeof import("../node_modules/lucide-vue-next")['Unlock']
    'LucideUnlockKeyhole': typeof import("../node_modules/lucide-vue-next")['UnlockKeyhole']
    'LucideUnplug': typeof import("../node_modules/lucide-vue-next")['Unplug']
    'LucideUpload': typeof import("../node_modules/lucide-vue-next")['Upload']
    'LucideUploadCloud': typeof import("../node_modules/lucide-vue-next")['UploadCloud']
    'LucideUsb': typeof import("../node_modules/lucide-vue-next")['Usb']
    'LucideUser': typeof import("../node_modules/lucide-vue-next")['User']
    'LucideUser2': typeof import("../node_modules/lucide-vue-next")['User2']
    'LucideUserCheck': typeof import("../node_modules/lucide-vue-next")['UserCheck']
    'LucideUserCheck2': typeof import("../node_modules/lucide-vue-next")['UserCheck2']
    'LucideUserCircle': typeof import("../node_modules/lucide-vue-next")['UserCircle']
    'LucideUserCircle2': typeof import("../node_modules/lucide-vue-next")['UserCircle2']
    'LucideUserCog': typeof import("../node_modules/lucide-vue-next")['UserCog']
    'LucideUserCog2': typeof import("../node_modules/lucide-vue-next")['UserCog2']
    'LucideUserMinus': typeof import("../node_modules/lucide-vue-next")['UserMinus']
    'LucideUserMinus2': typeof import("../node_modules/lucide-vue-next")['UserMinus2']
    'LucideUserPen': typeof import("../node_modules/lucide-vue-next")['UserPen']
    'LucideUserPlus': typeof import("../node_modules/lucide-vue-next")['UserPlus']
    'LucideUserPlus2': typeof import("../node_modules/lucide-vue-next")['UserPlus2']
    'LucideUserRound': typeof import("../node_modules/lucide-vue-next")['UserRound']
    'LucideUserRoundCheck': typeof import("../node_modules/lucide-vue-next")['UserRoundCheck']
    'LucideUserRoundCog': typeof import("../node_modules/lucide-vue-next")['UserRoundCog']
    'LucideUserRoundMinus': typeof import("../node_modules/lucide-vue-next")['UserRoundMinus']
    'LucideUserRoundPen': typeof import("../node_modules/lucide-vue-next")['UserRoundPen']
    'LucideUserRoundPlus': typeof import("../node_modules/lucide-vue-next")['UserRoundPlus']
    'LucideUserRoundSearch': typeof import("../node_modules/lucide-vue-next")['UserRoundSearch']
    'LucideUserRoundX': typeof import("../node_modules/lucide-vue-next")['UserRoundX']
    'LucideUserSearch': typeof import("../node_modules/lucide-vue-next")['UserSearch']
    'LucideUserSquare': typeof import("../node_modules/lucide-vue-next")['UserSquare']
    'LucideUserSquare2': typeof import("../node_modules/lucide-vue-next")['UserSquare2']
    'LucideUserX': typeof import("../node_modules/lucide-vue-next")['UserX']
    'LucideUserX2': typeof import("../node_modules/lucide-vue-next")['UserX2']
    'LucideUsers': typeof import("../node_modules/lucide-vue-next")['Users']
    'LucideUsers2': typeof import("../node_modules/lucide-vue-next")['Users2']
    'LucideUsersRound': typeof import("../node_modules/lucide-vue-next")['UsersRound']
    'LucideUtensils': typeof import("../node_modules/lucide-vue-next")['Utensils']
    'LucideUtensilsCrossed': typeof import("../node_modules/lucide-vue-next")['UtensilsCrossed']
    'LucideUtilityPole': typeof import("../node_modules/lucide-vue-next")['UtilityPole']
    'LucideVariable': typeof import("../node_modules/lucide-vue-next")['Variable']
    'LucideVault': typeof import("../node_modules/lucide-vue-next")['Vault']
    'LucideVegan': typeof import("../node_modules/lucide-vue-next")['Vegan']
    'LucideVenetianMask': typeof import("../node_modules/lucide-vue-next")['VenetianMask']
    'LucideVenus': typeof import("../node_modules/lucide-vue-next")['Venus']
    'LucideVenusAndMars': typeof import("../node_modules/lucide-vue-next")['VenusAndMars']
    'LucideVerified': typeof import("../node_modules/lucide-vue-next")['Verified']
    'LucideVibrate': typeof import("../node_modules/lucide-vue-next")['Vibrate']
    'LucideVibrateOff': typeof import("../node_modules/lucide-vue-next")['VibrateOff']
    'LucideVideo': typeof import("../node_modules/lucide-vue-next")['Video']
    'LucideVideoOff': typeof import("../node_modules/lucide-vue-next")['VideoOff']
    'LucideVideotape': typeof import("../node_modules/lucide-vue-next")['Videotape']
    'LucideView': typeof import("../node_modules/lucide-vue-next")['View']
    'LucideVoicemail': typeof import("../node_modules/lucide-vue-next")['Voicemail']
    'LucideVolleyball': typeof import("../node_modules/lucide-vue-next")['Volleyball']
    'LucideVolume': typeof import("../node_modules/lucide-vue-next")['Volume']
    'LucideVolume1': typeof import("../node_modules/lucide-vue-next")['Volume1']
    'LucideVolume2': typeof import("../node_modules/lucide-vue-next")['Volume2']
    'LucideVolumeOff': typeof import("../node_modules/lucide-vue-next")['VolumeOff']
    'LucideVolumeX': typeof import("../node_modules/lucide-vue-next")['VolumeX']
    'LucideVote': typeof import("../node_modules/lucide-vue-next")['Vote']
    'LucideWallet': typeof import("../node_modules/lucide-vue-next")['Wallet']
    'LucideWallet2': typeof import("../node_modules/lucide-vue-next")['Wallet2']
    'LucideWalletCards': typeof import("../node_modules/lucide-vue-next")['WalletCards']
    'LucideWalletMinimal': typeof import("../node_modules/lucide-vue-next")['WalletMinimal']
    'LucideWallpaper': typeof import("../node_modules/lucide-vue-next")['Wallpaper']
    'LucideWand': typeof import("../node_modules/lucide-vue-next")['Wand']
    'LucideWand2': typeof import("../node_modules/lucide-vue-next")['Wand2']
    'LucideWandSparkles': typeof import("../node_modules/lucide-vue-next")['WandSparkles']
    'LucideWarehouse': typeof import("../node_modules/lucide-vue-next")['Warehouse']
    'LucideWashingMachine': typeof import("../node_modules/lucide-vue-next")['WashingMachine']
    'LucideWatch': typeof import("../node_modules/lucide-vue-next")['Watch']
    'LucideWaves': typeof import("../node_modules/lucide-vue-next")['Waves']
    'LucideWavesLadder': typeof import("../node_modules/lucide-vue-next")['WavesLadder']
    'LucideWaypoints': typeof import("../node_modules/lucide-vue-next")['Waypoints']
    'LucideWebcam': typeof import("../node_modules/lucide-vue-next")['Webcam']
    'LucideWebhook': typeof import("../node_modules/lucide-vue-next")['Webhook']
    'LucideWebhookOff': typeof import("../node_modules/lucide-vue-next")['WebhookOff']
    'LucideWeight': typeof import("../node_modules/lucide-vue-next")['Weight']
    'LucideWheat': typeof import("../node_modules/lucide-vue-next")['Wheat']
    'LucideWheatOff': typeof import("../node_modules/lucide-vue-next")['WheatOff']
    'LucideWholeWord': typeof import("../node_modules/lucide-vue-next")['WholeWord']
    'LucideWifi': typeof import("../node_modules/lucide-vue-next")['Wifi']
    'LucideWifiHigh': typeof import("../node_modules/lucide-vue-next")['WifiHigh']
    'LucideWifiLow': typeof import("../node_modules/lucide-vue-next")['WifiLow']
    'LucideWifiOff': typeof import("../node_modules/lucide-vue-next")['WifiOff']
    'LucideWifiZero': typeof import("../node_modules/lucide-vue-next")['WifiZero']
    'LucideWind': typeof import("../node_modules/lucide-vue-next")['Wind']
    'LucideWindArrowDown': typeof import("../node_modules/lucide-vue-next")['WindArrowDown']
    'LucideWine': typeof import("../node_modules/lucide-vue-next")['Wine']
    'LucideWineOff': typeof import("../node_modules/lucide-vue-next")['WineOff']
    'LucideWorkflow': typeof import("../node_modules/lucide-vue-next")['Workflow']
    'LucideWorm': typeof import("../node_modules/lucide-vue-next")['Worm']
    'LucideWrapText': typeof import("../node_modules/lucide-vue-next")['WrapText']
    'LucideWrench': typeof import("../node_modules/lucide-vue-next")['Wrench']
    'LucideX': typeof import("../node_modules/lucide-vue-next")['X']
    'LucideXCircle': typeof import("../node_modules/lucide-vue-next")['XCircle']
    'LucideXOctagon': typeof import("../node_modules/lucide-vue-next")['XOctagon']
    'LucideXSquare': typeof import("../node_modules/lucide-vue-next")['XSquare']
    'LucideYoutube': typeof import("../node_modules/lucide-vue-next")['Youtube']
    'LucideZap': typeof import("../node_modules/lucide-vue-next")['Zap']
    'LucideZapOff': typeof import("../node_modules/lucide-vue-next")['ZapOff']
    'LucideZoomIn': typeof import("../node_modules/lucide-vue-next")['ZoomIn']
    'LucideZoomOut': typeof import("../node_modules/lucide-vue-next")['ZoomOut']
    'Lucideicons': typeof import("../node_modules/lucide-vue-next")['icons']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyBaseNavigation': LazyComponent<typeof import("../components/BaseNavigation.vue")['default']>
    'LazyLoginForm': LazyComponent<typeof import("../components/LoginForm.vue")['default']>
    'LazyLoginNavigation': LazyComponent<typeof import("../components/LoginNavigation.vue")['default']>
    'LazyMostPopular': LazyComponent<typeof import("../components/MostPopular.vue")['default']>
    'LazyRecomendation': LazyComponent<typeof import("../components/Recomendation.vue")['default']>
    'LazyRegistrationForm': LazyComponent<typeof import("../components/RegistrationForm.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
    'LazyFormControl': LazyComponent<typeof import("../components/ui/form/index")['FormControl']>
    'LazyFormDescription': LazyComponent<typeof import("../components/ui/form/index")['FormDescription']>
    'LazyFormItem': LazyComponent<typeof import("../components/ui/form/index")['FormItem']>
    'LazyFormLabel': LazyComponent<typeof import("../components/ui/form/index")['FormLabel']>
    'LazyFormMessage': LazyComponent<typeof import("../components/ui/form/index")['FormMessage']>
    'LazyFORMITEMINJECTIONKEY': LazyComponent<typeof import("../components/ui/form/index")['FORM_ITEM_INJECTION_KEY']>
    'LazyForm': LazyComponent<typeof import("../components/ui/form/index")['Form']>
    'LazyFormField': LazyComponent<typeof import("../components/ui/form/index")['FormField']>
    'LazyFormFieldArray': LazyComponent<typeof import("../components/ui/form/index")['FormFieldArray']>
    'LazyButton': LazyComponent<typeof import("../components/ui/button/index")['Button']>
    'LazyInput': LazyComponent<typeof import("../components/ui/input/index")['Input']>
    'LazyLabel': LazyComponent<typeof import("../components/ui/label/index")['Label']>
    'LazyLucideAArrowDown': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AArrowDown']>
    'LazyLucideAArrowUp': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AArrowUp']>
    'LazyLucideALargeSmall': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ALargeSmall']>
    'LazyLucideAccessibility': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Accessibility']>
    'LazyLucideActivity': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Activity']>
    'LazyLucideActivitySquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ActivitySquare']>
    'LazyLucideAirVent': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AirVent']>
    'LazyLucideAirplay': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Airplay']>
    'LazyLucideAlarmCheck': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlarmCheck']>
    'LazyLucideAlarmClock': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlarmClock']>
    'LazyLucideAlarmClockCheck': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlarmClockCheck']>
    'LazyLucideAlarmClockMinus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlarmClockMinus']>
    'LazyLucideAlarmClockOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlarmClockOff']>
    'LazyLucideAlarmClockPlus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlarmClockPlus']>
    'LazyLucideAlarmMinus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlarmMinus']>
    'LazyLucideAlarmPlus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlarmPlus']>
    'LazyLucideAlarmSmoke': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlarmSmoke']>
    'LazyLucideAlbum': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Album']>
    'LazyLucideAlertCircle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlertCircle']>
    'LazyLucideAlertOctagon': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlertOctagon']>
    'LazyLucideAlertTriangle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlertTriangle']>
    'LazyLucideAlignCenter': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignCenter']>
    'LazyLucideAlignCenterHorizontal': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignCenterHorizontal']>
    'LazyLucideAlignCenterVertical': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignCenterVertical']>
    'LazyLucideAlignEndHorizontal': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignEndHorizontal']>
    'LazyLucideAlignEndVertical': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignEndVertical']>
    'LazyLucideAlignHorizontalDistributeCenter': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignHorizontalDistributeCenter']>
    'LazyLucideAlignHorizontalDistributeEnd': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignHorizontalDistributeEnd']>
    'LazyLucideAlignHorizontalDistributeStart': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignHorizontalDistributeStart']>
    'LazyLucideAlignHorizontalJustifyCenter': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignHorizontalJustifyCenter']>
    'LazyLucideAlignHorizontalJustifyEnd': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignHorizontalJustifyEnd']>
    'LazyLucideAlignHorizontalJustifyStart': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignHorizontalJustifyStart']>
    'LazyLucideAlignHorizontalSpaceAround': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignHorizontalSpaceAround']>
    'LazyLucideAlignHorizontalSpaceBetween': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignHorizontalSpaceBetween']>
    'LazyLucideAlignJustify': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignJustify']>
    'LazyLucideAlignLeft': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignLeft']>
    'LazyLucideAlignRight': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignRight']>
    'LazyLucideAlignStartHorizontal': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignStartHorizontal']>
    'LazyLucideAlignStartVertical': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignStartVertical']>
    'LazyLucideAlignVerticalDistributeCenter': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignVerticalDistributeCenter']>
    'LazyLucideAlignVerticalDistributeEnd': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignVerticalDistributeEnd']>
    'LazyLucideAlignVerticalDistributeStart': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignVerticalDistributeStart']>
    'LazyLucideAlignVerticalJustifyCenter': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignVerticalJustifyCenter']>
    'LazyLucideAlignVerticalJustifyEnd': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignVerticalJustifyEnd']>
    'LazyLucideAlignVerticalJustifyStart': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignVerticalJustifyStart']>
    'LazyLucideAlignVerticalSpaceAround': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignVerticalSpaceAround']>
    'LazyLucideAlignVerticalSpaceBetween': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignVerticalSpaceBetween']>
    'LazyLucideAmbulance': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Ambulance']>
    'LazyLucideAmpersand': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Ampersand']>
    'LazyLucideAmpersands': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Ampersands']>
    'LazyLucideAmphora': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Amphora']>
    'LazyLucideAnchor': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Anchor']>
    'LazyLucideAngry': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Angry']>
    'LazyLucideAnnoyed': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Annoyed']>
    'LazyLucideAntenna': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Antenna']>
    'LazyLucideAnvil': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Anvil']>
    'LazyLucideAperture': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Aperture']>
    'LazyLucideAppWindow': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AppWindow']>
    'LazyLucideAppWindowMac': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AppWindowMac']>
    'LazyLucideApple': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Apple']>
    'LazyLucideArchive': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Archive']>
    'LazyLucideArchiveRestore': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArchiveRestore']>
    'LazyLucideArchiveX': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArchiveX']>
    'LazyLucideAreaChart': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AreaChart']>
    'LazyLucideArmchair': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Armchair']>
    'LazyLucideArrowBigDown': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowBigDown']>
    'LazyLucideArrowBigDownDash': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowBigDownDash']>
    'LazyLucideArrowBigLeft': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowBigLeft']>
    'LazyLucideArrowBigLeftDash': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowBigLeftDash']>
    'LazyLucideArrowBigRight': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowBigRight']>
    'LazyLucideArrowBigRightDash': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowBigRightDash']>
    'LazyLucideArrowBigUp': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowBigUp']>
    'LazyLucideArrowBigUpDash': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowBigUpDash']>
    'LazyLucideArrowDown': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDown']>
    'LazyLucideArrowDown01': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDown01']>
    'LazyLucideArrowDown10': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDown10']>
    'LazyLucideArrowDownAz': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDownAz']>
    'LazyLucideArrowDownCircle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDownCircle']>
    'LazyLucideArrowDownFromLine': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDownFromLine']>
    'LazyLucideArrowDownLeft': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDownLeft']>
    'LazyLucideArrowDownLeftFromCircle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDownLeftFromCircle']>
    'LazyLucideArrowDownLeftFromSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDownLeftFromSquare']>
    'LazyLucideArrowDownLeftSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDownLeftSquare']>
    'LazyLucideArrowDownNarrowWide': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDownNarrowWide']>
    'LazyLucideArrowDownRight': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDownRight']>
    'LazyLucideArrowDownRightFromCircle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDownRightFromCircle']>
    'LazyLucideArrowDownRightFromSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDownRightFromSquare']>
    'LazyLucideArrowDownRightSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDownRightSquare']>
    'LazyLucideArrowDownSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDownSquare']>
    'LazyLucideArrowDownToDot': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDownToDot']>
    'LazyLucideArrowDownToLine': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDownToLine']>
    'LazyLucideArrowDownUp': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDownUp']>
    'LazyLucideArrowDownWideNarrow': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDownWideNarrow']>
    'LazyLucideArrowDownZa': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDownZa']>
    'LazyLucideArrowLeft': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowLeft']>
    'LazyLucideArrowLeftCircle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowLeftCircle']>
    'LazyLucideArrowLeftFromLine': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowLeftFromLine']>
    'LazyLucideArrowLeftRight': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowLeftRight']>
    'LazyLucideArrowLeftSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowLeftSquare']>
    'LazyLucideArrowLeftToLine': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowLeftToLine']>
    'LazyLucideArrowRight': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowRight']>
    'LazyLucideArrowRightCircle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowRightCircle']>
    'LazyLucideArrowRightFromLine': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowRightFromLine']>
    'LazyLucideArrowRightLeft': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowRightLeft']>
    'LazyLucideArrowRightSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowRightSquare']>
    'LazyLucideArrowRightToLine': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowRightToLine']>
    'LazyLucideArrowUp': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUp']>
    'LazyLucideArrowUp01': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUp01']>
    'LazyLucideArrowUp10': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUp10']>
    'LazyLucideArrowUpAz': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUpAz']>
    'LazyLucideArrowUpCircle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUpCircle']>
    'LazyLucideArrowUpDown': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUpDown']>
    'LazyLucideArrowUpFromDot': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUpFromDot']>
    'LazyLucideArrowUpFromLine': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUpFromLine']>
    'LazyLucideArrowUpLeft': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUpLeft']>
    'LazyLucideArrowUpLeftFromCircle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUpLeftFromCircle']>
    'LazyLucideArrowUpLeftFromSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUpLeftFromSquare']>
    'LazyLucideArrowUpLeftSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUpLeftSquare']>
    'LazyLucideArrowUpNarrowWide': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUpNarrowWide']>
    'LazyLucideArrowUpRight': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUpRight']>
    'LazyLucideArrowUpRightFromCircle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUpRightFromCircle']>
    'LazyLucideArrowUpRightFromSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUpRightFromSquare']>
    'LazyLucideArrowUpRightSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUpRightSquare']>
    'LazyLucideArrowUpSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUpSquare']>
    'LazyLucideArrowUpToLine': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUpToLine']>
    'LazyLucideArrowUpWideNarrow': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUpWideNarrow']>
    'LazyLucideArrowUpZa': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUpZa']>
    'LazyLucideArrowsUpFromLine': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowsUpFromLine']>
    'LazyLucideAsterisk': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Asterisk']>
    'LazyLucideAsteriskSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AsteriskSquare']>
    'LazyLucideAtSign': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AtSign']>
    'LazyLucideAtom': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Atom']>
    'LazyLucideAudioLines': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AudioLines']>
    'LazyLucideAudioWaveform': LazyComponent<typeof import("../node_modules/lucide-vue-next")['AudioWaveform']>
    'LazyLucideAward': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Award']>
    'LazyLucideAxe': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Axe']>
    'LazyLucideAxis3d': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Axis3d']>
    'LazyLucideBaby': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Baby']>
    'LazyLucideBackpack': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Backpack']>
    'LazyLucideBadge': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Badge']>
    'LazyLucideBadgeAlert': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BadgeAlert']>
    'LazyLucideBadgeCent': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BadgeCent']>
    'LazyLucideBadgeCheck': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BadgeCheck']>
    'LazyLucideBadgeDollarSign': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BadgeDollarSign']>
    'LazyLucideBadgeEuro': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BadgeEuro']>
    'LazyLucideBadgeHelp': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BadgeHelp']>
    'LazyLucideBadgeIndianRupee': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BadgeIndianRupee']>
    'LazyLucideBadgeInfo': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BadgeInfo']>
    'LazyLucideBadgeJapaneseYen': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BadgeJapaneseYen']>
    'LazyLucideBadgeMinus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BadgeMinus']>
    'LazyLucideBadgePercent': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BadgePercent']>
    'LazyLucideBadgePlus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BadgePlus']>
    'LazyLucideBadgePoundSterling': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BadgePoundSterling']>
    'LazyLucideBadgeRussianRuble': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BadgeRussianRuble']>
    'LazyLucideBadgeSwissFranc': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BadgeSwissFranc']>
    'LazyLucideBadgeX': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BadgeX']>
    'LazyLucideBaggageClaim': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BaggageClaim']>
    'LazyLucideBan': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Ban']>
    'LazyLucideBanana': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Banana']>
    'LazyLucideBandage': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Bandage']>
    'LazyLucideBanknote': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Banknote']>
    'LazyLucideBanknoteArrowDown': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BanknoteArrowDown']>
    'LazyLucideBanknoteArrowUp': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BanknoteArrowUp']>
    'LazyLucideBanknoteX': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BanknoteX']>
    'LazyLucideBarChart': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BarChart']>
    'LazyLucideBarChart2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BarChart2']>
    'LazyLucideBarChart3': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BarChart3']>
    'LazyLucideBarChart4': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BarChart4']>
    'LazyLucideBarChartBig': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BarChartBig']>
    'LazyLucideBarChartHorizontal': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BarChartHorizontal']>
    'LazyLucideBarChartHorizontalBig': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BarChartHorizontalBig']>
    'LazyLucideBarcode': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Barcode']>
    'LazyLucideBaseline': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Baseline']>
    'LazyLucideBath': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Bath']>
    'LazyLucideBattery': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Battery']>
    'LazyLucideBatteryCharging': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BatteryCharging']>
    'LazyLucideBatteryFull': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BatteryFull']>
    'LazyLucideBatteryLow': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BatteryLow']>
    'LazyLucideBatteryMedium': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BatteryMedium']>
    'LazyLucideBatteryPlus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BatteryPlus']>
    'LazyLucideBatteryWarning': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BatteryWarning']>
    'LazyLucideBeaker': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Beaker']>
    'LazyLucideBean': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Bean']>
    'LazyLucideBeanOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BeanOff']>
    'LazyLucideBed': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Bed']>
    'LazyLucideBedDouble': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BedDouble']>
    'LazyLucideBedSingle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BedSingle']>
    'LazyLucideBeef': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Beef']>
    'LazyLucideBeer': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Beer']>
    'LazyLucideBeerOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BeerOff']>
    'LazyLucideBell': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Bell']>
    'LazyLucideBellDot': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BellDot']>
    'LazyLucideBellElectric': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BellElectric']>
    'LazyLucideBellMinus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BellMinus']>
    'LazyLucideBellOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BellOff']>
    'LazyLucideBellPlus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BellPlus']>
    'LazyLucideBellRing': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BellRing']>
    'LazyLucideBetweenHorizonalEnd': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BetweenHorizonalEnd']>
    'LazyLucideBetweenHorizonalStart': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BetweenHorizonalStart']>
    'LazyLucideBetweenHorizontalEnd': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BetweenHorizontalEnd']>
    'LazyLucideBetweenHorizontalStart': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BetweenHorizontalStart']>
    'LazyLucideBetweenVerticalEnd': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BetweenVerticalEnd']>
    'LazyLucideBetweenVerticalStart': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BetweenVerticalStart']>
    'LazyLucideBicepsFlexed': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BicepsFlexed']>
    'LazyLucideBike': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Bike']>
    'LazyLucideBinary': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Binary']>
    'LazyLucideBinoculars': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Binoculars']>
    'LazyLucideBiohazard': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Biohazard']>
    'LazyLucideBird': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Bird']>
    'LazyLucideBitcoin': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Bitcoin']>
    'LazyLucideBlend': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Blend']>
    'LazyLucideBlinds': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Blinds']>
    'LazyLucideBlocks': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Blocks']>
    'LazyLucideBluetooth': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Bluetooth']>
    'LazyLucideBluetoothConnected': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BluetoothConnected']>
    'LazyLucideBluetoothOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BluetoothOff']>
    'LazyLucideBluetoothSearching': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BluetoothSearching']>
    'LazyLucideBold': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Bold']>
    'LazyLucideBolt': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Bolt']>
    'LazyLucideBomb': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Bomb']>
    'LazyLucideBone': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Bone']>
    'LazyLucideBook': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Book']>
    'LazyLucideBookA': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookA']>
    'LazyLucideBookAudio': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookAudio']>
    'LazyLucideBookCheck': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookCheck']>
    'LazyLucideBookCopy': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookCopy']>
    'LazyLucideBookDashed': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookDashed']>
    'LazyLucideBookDown': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookDown']>
    'LazyLucideBookHeadphones': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookHeadphones']>
    'LazyLucideBookHeart': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookHeart']>
    'LazyLucideBookImage': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookImage']>
    'LazyLucideBookKey': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookKey']>
    'LazyLucideBookLock': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookLock']>
    'LazyLucideBookMarked': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookMarked']>
    'LazyLucideBookMinus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookMinus']>
    'LazyLucideBookOpen': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookOpen']>
    'LazyLucideBookOpenCheck': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookOpenCheck']>
    'LazyLucideBookOpenText': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookOpenText']>
    'LazyLucideBookPlus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookPlus']>
    'LazyLucideBookTemplate': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookTemplate']>
    'LazyLucideBookText': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookText']>
    'LazyLucideBookType': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookType']>
    'LazyLucideBookUp': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookUp']>
    'LazyLucideBookUp2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookUp2']>
    'LazyLucideBookUser': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookUser']>
    'LazyLucideBookX': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookX']>
    'LazyLucideBookmark': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Bookmark']>
    'LazyLucideBookmarkCheck': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookmarkCheck']>
    'LazyLucideBookmarkMinus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookmarkMinus']>
    'LazyLucideBookmarkPlus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookmarkPlus']>
    'LazyLucideBookmarkX': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookmarkX']>
    'LazyLucideBoomBox': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BoomBox']>
    'LazyLucideBot': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Bot']>
    'LazyLucideBotMessageSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BotMessageSquare']>
    'LazyLucideBotOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BotOff']>
    'LazyLucideBox': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Box']>
    'LazyLucideBoxSelect': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BoxSelect']>
    'LazyLucideBoxes': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Boxes']>
    'LazyLucideBraces': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Braces']>
    'LazyLucideBrackets': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Brackets']>
    'LazyLucideBrain': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Brain']>
    'LazyLucideBrainCircuit': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BrainCircuit']>
    'LazyLucideBrainCog': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BrainCog']>
    'LazyLucideBrickWall': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BrickWall']>
    'LazyLucideBriefcase': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Briefcase']>
    'LazyLucideBriefcaseBusiness': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BriefcaseBusiness']>
    'LazyLucideBriefcaseConveyorBelt': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BriefcaseConveyorBelt']>
    'LazyLucideBriefcaseMedical': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BriefcaseMedical']>
    'LazyLucideBringToFront': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BringToFront']>
    'LazyLucideBrush': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Brush']>
    'LazyLucideBug': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Bug']>
    'LazyLucideBugOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BugOff']>
    'LazyLucideBugPlay': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BugPlay']>
    'LazyLucideBuilding': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Building']>
    'LazyLucideBuilding2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Building2']>
    'LazyLucideBus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Bus']>
    'LazyLucideBusFront': LazyComponent<typeof import("../node_modules/lucide-vue-next")['BusFront']>
    'LazyLucideCable': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Cable']>
    'LazyLucideCableCar': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CableCar']>
    'LazyLucideCake': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Cake']>
    'LazyLucideCakeSlice': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CakeSlice']>
    'LazyLucideCalculator': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Calculator']>
    'LazyLucideCalendar': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Calendar']>
    'LazyLucideCalendar1': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Calendar1']>
    'LazyLucideCalendarArrowDown': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CalendarArrowDown']>
    'LazyLucideCalendarArrowUp': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CalendarArrowUp']>
    'LazyLucideCalendarCheck': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CalendarCheck']>
    'LazyLucideCalendarCheck2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CalendarCheck2']>
    'LazyLucideCalendarClock': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CalendarClock']>
    'LazyLucideCalendarCog': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CalendarCog']>
    'LazyLucideCalendarDays': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CalendarDays']>
    'LazyLucideCalendarFold': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CalendarFold']>
    'LazyLucideCalendarHeart': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CalendarHeart']>
    'LazyLucideCalendarMinus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CalendarMinus']>
    'LazyLucideCalendarMinus2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CalendarMinus2']>
    'LazyLucideCalendarOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CalendarOff']>
    'LazyLucideCalendarPlus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CalendarPlus']>
    'LazyLucideCalendarPlus2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CalendarPlus2']>
    'LazyLucideCalendarRange': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CalendarRange']>
    'LazyLucideCalendarSearch': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CalendarSearch']>
    'LazyLucideCalendarSync': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CalendarSync']>
    'LazyLucideCalendarX': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CalendarX']>
    'LazyLucideCalendarX2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CalendarX2']>
    'LazyLucideCamera': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Camera']>
    'LazyLucideCameraOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CameraOff']>
    'LazyLucideCandlestickChart': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CandlestickChart']>
    'LazyLucideCandy': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Candy']>
    'LazyLucideCandyCane': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CandyCane']>
    'LazyLucideCandyOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CandyOff']>
    'LazyLucideCannabis': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Cannabis']>
    'LazyLucideCaptions': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Captions']>
    'LazyLucideCaptionsOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CaptionsOff']>
    'LazyLucideCar': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Car']>
    'LazyLucideCarFront': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CarFront']>
    'LazyLucideCarTaxiFront': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CarTaxiFront']>
    'LazyLucideCaravan': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Caravan']>
    'LazyLucideCarrot': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Carrot']>
    'LazyLucideCaseLower': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CaseLower']>
    'LazyLucideCaseSensitive': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CaseSensitive']>
    'LazyLucideCaseUpper': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CaseUpper']>
    'LazyLucideCassetteTape': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CassetteTape']>
    'LazyLucideCast': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Cast']>
    'LazyLucideCastle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Castle']>
    'LazyLucideCat': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Cat']>
    'LazyLucideCctv': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Cctv']>
    'LazyLucideChartArea': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartArea']>
    'LazyLucideChartBar': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartBar']>
    'LazyLucideChartBarBig': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartBarBig']>
    'LazyLucideChartBarDecreasing': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartBarDecreasing']>
    'LazyLucideChartBarIncreasing': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartBarIncreasing']>
    'LazyLucideChartBarStacked': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartBarStacked']>
    'LazyLucideChartCandlestick': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartCandlestick']>
    'LazyLucideChartColumn': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartColumn']>
    'LazyLucideChartColumnBig': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartColumnBig']>
    'LazyLucideChartColumnDecreasing': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartColumnDecreasing']>
    'LazyLucideChartColumnIncreasing': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartColumnIncreasing']>
    'LazyLucideChartColumnStacked': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartColumnStacked']>
    'LazyLucideChartGantt': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartGantt']>
    'LazyLucideChartLine': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartLine']>
    'LazyLucideChartNetwork': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartNetwork']>
    'LazyLucideChartNoAxesColumn': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartNoAxesColumn']>
    'LazyLucideChartNoAxesColumnDecreasing': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartNoAxesColumnDecreasing']>
    'LazyLucideChartNoAxesColumnIncreasing': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartNoAxesColumnIncreasing']>
    'LazyLucideChartNoAxesCombined': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartNoAxesCombined']>
    'LazyLucideChartNoAxesGantt': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartNoAxesGantt']>
    'LazyLucideChartPie': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartPie']>
    'LazyLucideChartScatter': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartScatter']>
    'LazyLucideChartSpline': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartSpline']>
    'LazyLucideCheck': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Check']>
    'LazyLucideCheckCheck': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CheckCheck']>
    'LazyLucideCheckCircle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CheckCircle']>
    'LazyLucideCheckCircle2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CheckCircle2']>
    'LazyLucideCheckSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CheckSquare']>
    'LazyLucideCheckSquare2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CheckSquare2']>
    'LazyLucideChefHat': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChefHat']>
    'LazyLucideCherry': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Cherry']>
    'LazyLucideChevronDown': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronDown']>
    'LazyLucideChevronDownCircle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronDownCircle']>
    'LazyLucideChevronDownSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronDownSquare']>
    'LazyLucideChevronFirst': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronFirst']>
    'LazyLucideChevronLast': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronLast']>
    'LazyLucideChevronLeft': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronLeft']>
    'LazyLucideChevronLeftCircle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronLeftCircle']>
    'LazyLucideChevronLeftSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronLeftSquare']>
    'LazyLucideChevronRight': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronRight']>
    'LazyLucideChevronRightCircle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronRightCircle']>
    'LazyLucideChevronRightSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronRightSquare']>
    'LazyLucideChevronUp': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronUp']>
    'LazyLucideChevronUpCircle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronUpCircle']>
    'LazyLucideChevronUpSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronUpSquare']>
    'LazyLucideChevronsDown': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronsDown']>
    'LazyLucideChevronsDownUp': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronsDownUp']>
    'LazyLucideChevronsLeft': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronsLeft']>
    'LazyLucideChevronsLeftRight': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronsLeftRight']>
    'LazyLucideChevronsLeftRightEllipsis': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronsLeftRightEllipsis']>
    'LazyLucideChevronsRight': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronsRight']>
    'LazyLucideChevronsRightLeft': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronsRightLeft']>
    'LazyLucideChevronsUp': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronsUp']>
    'LazyLucideChevronsUpDown': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronsUpDown']>
    'LazyLucideChrome': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Chrome']>
    'LazyLucideChurch': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Church']>
    'LazyLucideCigarette': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Cigarette']>
    'LazyLucideCigaretteOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CigaretteOff']>
    'LazyLucideCircle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Circle']>
    'LazyLucideCircleAlert': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleAlert']>
    'LazyLucideCircleArrowDown': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleArrowDown']>
    'LazyLucideCircleArrowLeft': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleArrowLeft']>
    'LazyLucideCircleArrowOutDownLeft': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleArrowOutDownLeft']>
    'LazyLucideCircleArrowOutDownRight': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleArrowOutDownRight']>
    'LazyLucideCircleArrowOutUpLeft': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleArrowOutUpLeft']>
    'LazyLucideCircleArrowOutUpRight': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleArrowOutUpRight']>
    'LazyLucideCircleArrowRight': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleArrowRight']>
    'LazyLucideCircleArrowUp': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleArrowUp']>
    'LazyLucideCircleCheck': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleCheck']>
    'LazyLucideCircleCheckBig': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleCheckBig']>
    'LazyLucideCircleChevronDown': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleChevronDown']>
    'LazyLucideCircleChevronLeft': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleChevronLeft']>
    'LazyLucideCircleChevronRight': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleChevronRight']>
    'LazyLucideCircleChevronUp': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleChevronUp']>
    'LazyLucideCircleDashed': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleDashed']>
    'LazyLucideCircleDivide': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleDivide']>
    'LazyLucideCircleDollarSign': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleDollarSign']>
    'LazyLucideCircleDot': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleDot']>
    'LazyLucideCircleDotDashed': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleDotDashed']>
    'LazyLucideCircleEllipsis': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleEllipsis']>
    'LazyLucideCircleEqual': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleEqual']>
    'LazyLucideCircleFadingArrowUp': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleFadingArrowUp']>
    'LazyLucideCircleFadingPlus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleFadingPlus']>
    'LazyLucideCircleGauge': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleGauge']>
    'LazyLucideCircleHelp': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleHelp']>
    'LazyLucideCircleMinus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleMinus']>
    'LazyLucideCircleOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleOff']>
    'LazyLucideCircleParking': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleParking']>
    'LazyLucideCircleParkingOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleParkingOff']>
    'LazyLucideCirclePause': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CirclePause']>
    'LazyLucideCirclePercent': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CirclePercent']>
    'LazyLucideCirclePlay': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CirclePlay']>
    'LazyLucideCirclePlus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CirclePlus']>
    'LazyLucideCirclePower': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CirclePower']>
    'LazyLucideCircleSlash': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleSlash']>
    'LazyLucideCircleSlash2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleSlash2']>
    'LazyLucideCircleSlashed': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleSlashed']>
    'LazyLucideCircleSmall': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleSmall']>
    'LazyLucideCircleStop': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleStop']>
    'LazyLucideCircleUser': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleUser']>
    'LazyLucideCircleUserRound': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleUserRound']>
    'LazyLucideCircleX': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleX']>
    'LazyLucideCircuitBoard': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircuitBoard']>
    'LazyLucideCitrus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Citrus']>
    'LazyLucideClapperboard': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Clapperboard']>
    'LazyLucideClipboard': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Clipboard']>
    'LazyLucideClipboardCheck': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ClipboardCheck']>
    'LazyLucideClipboardCopy': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ClipboardCopy']>
    'LazyLucideClipboardEdit': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ClipboardEdit']>
    'LazyLucideClipboardList': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ClipboardList']>
    'LazyLucideClipboardMinus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ClipboardMinus']>
    'LazyLucideClipboardPaste': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ClipboardPaste']>
    'LazyLucideClipboardPen': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ClipboardPen']>
    'LazyLucideClipboardPenLine': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ClipboardPenLine']>
    'LazyLucideClipboardPlus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ClipboardPlus']>
    'LazyLucideClipboardSignature': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ClipboardSignature']>
    'LazyLucideClipboardType': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ClipboardType']>
    'LazyLucideClipboardX': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ClipboardX']>
    'LazyLucideClock': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Clock']>
    'LazyLucideClock1': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Clock1']>
    'LazyLucideClock10': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Clock10']>
    'LazyLucideClock11': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Clock11']>
    'LazyLucideClock12': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Clock12']>
    'LazyLucideClock2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Clock2']>
    'LazyLucideClock3': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Clock3']>
    'LazyLucideClock4': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Clock4']>
    'LazyLucideClock5': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Clock5']>
    'LazyLucideClock6': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Clock6']>
    'LazyLucideClock7': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Clock7']>
    'LazyLucideClock8': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Clock8']>
    'LazyLucideClock9': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Clock9']>
    'LazyLucideClockAlert': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ClockAlert']>
    'LazyLucideClockArrowDown': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ClockArrowDown']>
    'LazyLucideClockArrowUp': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ClockArrowUp']>
    'LazyLucideClockFading': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ClockFading']>
    'LazyLucideCloud': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Cloud']>
    'LazyLucideCloudAlert': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CloudAlert']>
    'LazyLucideCloudCog': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CloudCog']>
    'LazyLucideCloudDownload': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CloudDownload']>
    'LazyLucideCloudDrizzle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CloudDrizzle']>
    'LazyLucideCloudFog': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CloudFog']>
    'LazyLucideCloudHail': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CloudHail']>
    'LazyLucideCloudLightning': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CloudLightning']>
    'LazyLucideCloudMoon': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CloudMoon']>
    'LazyLucideCloudMoonRain': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CloudMoonRain']>
    'LazyLucideCloudOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CloudOff']>
    'LazyLucideCloudRain': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CloudRain']>
    'LazyLucideCloudRainWind': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CloudRainWind']>
    'LazyLucideCloudSnow': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CloudSnow']>
    'LazyLucideCloudSun': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CloudSun']>
    'LazyLucideCloudSunRain': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CloudSunRain']>
    'LazyLucideCloudUpload': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CloudUpload']>
    'LazyLucideCloudy': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Cloudy']>
    'LazyLucideClover': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Clover']>
    'LazyLucideClub': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Club']>
    'LazyLucideCode': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Code']>
    'LazyLucideCode2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Code2']>
    'LazyLucideCodeSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CodeSquare']>
    'LazyLucideCodeXml': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CodeXml']>
    'LazyLucideCodepen': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Codepen']>
    'LazyLucideCodesandbox': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Codesandbox']>
    'LazyLucideCoffee': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Coffee']>
    'LazyLucideCog': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Cog']>
    'LazyLucideCoins': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Coins']>
    'LazyLucideColumns': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Columns']>
    'LazyLucideColumns2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Columns2']>
    'LazyLucideColumns3': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Columns3']>
    'LazyLucideColumns4': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Columns4']>
    'LazyLucideCombine': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Combine']>
    'LazyLucideCommand': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Command']>
    'LazyLucideCompass': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Compass']>
    'LazyLucideComponent': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Component']>
    'LazyLucideComputer': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Computer']>
    'LazyLucideConciergeBell': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ConciergeBell']>
    'LazyLucideCone': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Cone']>
    'LazyLucideConstruction': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Construction']>
    'LazyLucideContact': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Contact']>
    'LazyLucideContact2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Contact2']>
    'LazyLucideContactRound': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ContactRound']>
    'LazyLucideContainer': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Container']>
    'LazyLucideContrast': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Contrast']>
    'LazyLucideCookie': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Cookie']>
    'LazyLucideCookingPot': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CookingPot']>
    'LazyLucideCopy': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Copy']>
    'LazyLucideCopyCheck': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CopyCheck']>
    'LazyLucideCopyMinus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CopyMinus']>
    'LazyLucideCopyPlus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CopyPlus']>
    'LazyLucideCopySlash': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CopySlash']>
    'LazyLucideCopyX': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CopyX']>
    'LazyLucideCopyleft': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Copyleft']>
    'LazyLucideCopyright': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Copyright']>
    'LazyLucideCornerDownLeft': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CornerDownLeft']>
    'LazyLucideCornerDownRight': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CornerDownRight']>
    'LazyLucideCornerLeftDown': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CornerLeftDown']>
    'LazyLucideCornerLeftUp': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CornerLeftUp']>
    'LazyLucideCornerRightDown': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CornerRightDown']>
    'LazyLucideCornerRightUp': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CornerRightUp']>
    'LazyLucideCornerUpLeft': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CornerUpLeft']>
    'LazyLucideCornerUpRight': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CornerUpRight']>
    'LazyLucideCpu': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Cpu']>
    'LazyLucideCreativeCommons': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CreativeCommons']>
    'LazyLucideCreditCard': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CreditCard']>
    'LazyLucideCroissant': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Croissant']>
    'LazyLucideCrop': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Crop']>
    'LazyLucideCross': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Cross']>
    'LazyLucideCrosshair': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Crosshair']>
    'LazyLucideCrown': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Crown']>
    'LazyLucideCuboid': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Cuboid']>
    'LazyLucideCupSoda': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CupSoda']>
    'LazyLucideCurlyBraces': LazyComponent<typeof import("../node_modules/lucide-vue-next")['CurlyBraces']>
    'LazyLucideCurrency': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Currency']>
    'LazyLucideCylinder': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Cylinder']>
    'LazyLucideDam': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Dam']>
    'LazyLucideDatabase': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Database']>
    'LazyLucideDatabaseBackup': LazyComponent<typeof import("../node_modules/lucide-vue-next")['DatabaseBackup']>
    'LazyLucideDatabaseZap': LazyComponent<typeof import("../node_modules/lucide-vue-next")['DatabaseZap']>
    'LazyLucideDelete': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Delete']>
    'LazyLucideDessert': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Dessert']>
    'LazyLucideDiameter': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Diameter']>
    'LazyLucideDiamond': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Diamond']>
    'LazyLucideDiamondMinus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['DiamondMinus']>
    'LazyLucideDiamondPercent': LazyComponent<typeof import("../node_modules/lucide-vue-next")['DiamondPercent']>
    'LazyLucideDiamondPlus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['DiamondPlus']>
    'LazyLucideDice1': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Dice1']>
    'LazyLucideDice2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Dice2']>
    'LazyLucideDice3': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Dice3']>
    'LazyLucideDice4': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Dice4']>
    'LazyLucideDice5': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Dice5']>
    'LazyLucideDice6': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Dice6']>
    'LazyLucideDices': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Dices']>
    'LazyLucideDiff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Diff']>
    'LazyLucideDisc': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Disc']>
    'LazyLucideDisc2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Disc2']>
    'LazyLucideDisc3': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Disc3']>
    'LazyLucideDiscAlbum': LazyComponent<typeof import("../node_modules/lucide-vue-next")['DiscAlbum']>
    'LazyLucideDivide': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Divide']>
    'LazyLucideDivideCircle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['DivideCircle']>
    'LazyLucideDivideSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['DivideSquare']>
    'LazyLucideDna': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Dna']>
    'LazyLucideDnaOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['DnaOff']>
    'LazyLucideDock': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Dock']>
    'LazyLucideDog': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Dog']>
    'LazyLucideDollarSign': LazyComponent<typeof import("../node_modules/lucide-vue-next")['DollarSign']>
    'LazyLucideDonut': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Donut']>
    'LazyLucideDoorClosed': LazyComponent<typeof import("../node_modules/lucide-vue-next")['DoorClosed']>
    'LazyLucideDoorOpen': LazyComponent<typeof import("../node_modules/lucide-vue-next")['DoorOpen']>
    'LazyLucideDot': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Dot']>
    'LazyLucideDotSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['DotSquare']>
    'LazyLucideDownload': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Download']>
    'LazyLucideDownloadCloud': LazyComponent<typeof import("../node_modules/lucide-vue-next")['DownloadCloud']>
    'LazyLucideDraftingCompass': LazyComponent<typeof import("../node_modules/lucide-vue-next")['DraftingCompass']>
    'LazyLucideDrama': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Drama']>
    'LazyLucideDribbble': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Dribbble']>
    'LazyLucideDrill': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Drill']>
    'LazyLucideDroplet': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Droplet']>
    'LazyLucideDropletOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['DropletOff']>
    'LazyLucideDroplets': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Droplets']>
    'LazyLucideDrum': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Drum']>
    'LazyLucideDrumstick': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Drumstick']>
    'LazyLucideDumbbell': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Dumbbell']>
    'LazyLucideEar': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Ear']>
    'LazyLucideEarOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['EarOff']>
    'LazyLucideEarth': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Earth']>
    'LazyLucideEarthLock': LazyComponent<typeof import("../node_modules/lucide-vue-next")['EarthLock']>
    'LazyLucideEclipse': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Eclipse']>
    'LazyLucideEdit': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Edit']>
    'LazyLucideEdit2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Edit2']>
    'LazyLucideEdit3': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Edit3']>
    'LazyLucideEgg': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Egg']>
    'LazyLucideEggFried': LazyComponent<typeof import("../node_modules/lucide-vue-next")['EggFried']>
    'LazyLucideEggOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['EggOff']>
    'LazyLucideEllipsis': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Ellipsis']>
    'LazyLucideEllipsisVertical': LazyComponent<typeof import("../node_modules/lucide-vue-next")['EllipsisVertical']>
    'LazyLucideEqual': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Equal']>
    'LazyLucideEqualApproximately': LazyComponent<typeof import("../node_modules/lucide-vue-next")['EqualApproximately']>
    'LazyLucideEqualNot': LazyComponent<typeof import("../node_modules/lucide-vue-next")['EqualNot']>
    'LazyLucideEqualSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['EqualSquare']>
    'LazyLucideEraser': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Eraser']>
    'LazyLucideEthernetPort': LazyComponent<typeof import("../node_modules/lucide-vue-next")['EthernetPort']>
    'LazyLucideEuro': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Euro']>
    'LazyLucideExpand': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Expand']>
    'LazyLucideExternalLink': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ExternalLink']>
    'LazyLucideEye': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Eye']>
    'LazyLucideEyeClosed': LazyComponent<typeof import("../node_modules/lucide-vue-next")['EyeClosed']>
    'LazyLucideEyeOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['EyeOff']>
    'LazyLucideFacebook': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Facebook']>
    'LazyLucideFactory': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Factory']>
    'LazyLucideFan': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Fan']>
    'LazyLucideFastForward': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FastForward']>
    'LazyLucideFeather': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Feather']>
    'LazyLucideFence': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Fence']>
    'LazyLucideFerrisWheel': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FerrisWheel']>
    'LazyLucideFigma': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Figma']>
    'LazyLucideFile': LazyComponent<typeof import("../node_modules/lucide-vue-next")['File']>
    'LazyLucideFileArchive': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileArchive']>
    'LazyLucideFileAudio': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileAudio']>
    'LazyLucideFileAudio2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileAudio2']>
    'LazyLucideFileAxis3d': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileAxis3d']>
    'LazyLucideFileBadge': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileBadge']>
    'LazyLucideFileBadge2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileBadge2']>
    'LazyLucideFileBarChart': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileBarChart']>
    'LazyLucideFileBarChart2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileBarChart2']>
    'LazyLucideFileBox': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileBox']>
    'LazyLucideFileChartColumn': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileChartColumn']>
    'LazyLucideFileChartColumnIncreasing': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileChartColumnIncreasing']>
    'LazyLucideFileChartLine': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileChartLine']>
    'LazyLucideFileChartPie': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileChartPie']>
    'LazyLucideFileCheck': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileCheck']>
    'LazyLucideFileCheck2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileCheck2']>
    'LazyLucideFileClock': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileClock']>
    'LazyLucideFileCode': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileCode']>
    'LazyLucideFileCode2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileCode2']>
    'LazyLucideFileCog': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileCog']>
    'LazyLucideFileCog2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileCog2']>
    'LazyLucideFileDiff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileDiff']>
    'LazyLucideFileDigit': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileDigit']>
    'LazyLucideFileDown': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileDown']>
    'LazyLucideFileEdit': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileEdit']>
    'LazyLucideFileHeart': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileHeart']>
    'LazyLucideFileImage': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileImage']>
    'LazyLucideFileInput': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileInput']>
    'LazyLucideFileJson': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileJson']>
    'LazyLucideFileJson2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileJson2']>
    'LazyLucideFileKey': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileKey']>
    'LazyLucideFileKey2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileKey2']>
    'LazyLucideFileLineChart': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileLineChart']>
    'LazyLucideFileLock': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileLock']>
    'LazyLucideFileLock2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileLock2']>
    'LazyLucideFileMinus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileMinus']>
    'LazyLucideFileMinus2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileMinus2']>
    'LazyLucideFileMusic': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileMusic']>
    'LazyLucideFileOutput': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileOutput']>
    'LazyLucideFilePen': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FilePen']>
    'LazyLucideFilePenLine': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FilePenLine']>
    'LazyLucideFilePieChart': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FilePieChart']>
    'LazyLucideFilePlus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FilePlus']>
    'LazyLucideFilePlus2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FilePlus2']>
    'LazyLucideFileQuestion': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileQuestion']>
    'LazyLucideFileScan': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileScan']>
    'LazyLucideFileSearch': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileSearch']>
    'LazyLucideFileSearch2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileSearch2']>
    'LazyLucideFileSignature': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileSignature']>
    'LazyLucideFileSliders': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileSliders']>
    'LazyLucideFileSpreadsheet': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileSpreadsheet']>
    'LazyLucideFileStack': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileStack']>
    'LazyLucideFileSymlink': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileSymlink']>
    'LazyLucideFileTerminal': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileTerminal']>
    'LazyLucideFileText': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileText']>
    'LazyLucideFileType': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileType']>
    'LazyLucideFileType2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileType2']>
    'LazyLucideFileUp': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileUp']>
    'LazyLucideFileUser': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileUser']>
    'LazyLucideFileVideo': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileVideo']>
    'LazyLucideFileVideo2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileVideo2']>
    'LazyLucideFileVolume': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileVolume']>
    'LazyLucideFileVolume2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileVolume2']>
    'LazyLucideFileWarning': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileWarning']>
    'LazyLucideFileX': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileX']>
    'LazyLucideFileX2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileX2']>
    'LazyLucideFiles': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Files']>
    'LazyLucideFilm': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Film']>
    'LazyLucideFilter': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Filter']>
    'LazyLucideFilterX': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FilterX']>
    'LazyLucideFingerprint': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Fingerprint']>
    'LazyLucideFireExtinguisher': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FireExtinguisher']>
    'LazyLucideFish': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Fish']>
    'LazyLucideFishOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FishOff']>
    'LazyLucideFishSymbol': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FishSymbol']>
    'LazyLucideFlag': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Flag']>
    'LazyLucideFlagOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FlagOff']>
    'LazyLucideFlagTriangleLeft': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FlagTriangleLeft']>
    'LazyLucideFlagTriangleRight': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FlagTriangleRight']>
    'LazyLucideFlame': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Flame']>
    'LazyLucideFlameKindling': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FlameKindling']>
    'LazyLucideFlashlight': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Flashlight']>
    'LazyLucideFlashlightOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FlashlightOff']>
    'LazyLucideFlaskConical': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FlaskConical']>
    'LazyLucideFlaskConicalOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FlaskConicalOff']>
    'LazyLucideFlaskRound': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FlaskRound']>
    'LazyLucideFlipHorizontal': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FlipHorizontal']>
    'LazyLucideFlipHorizontal2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FlipHorizontal2']>
    'LazyLucideFlipVertical': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FlipVertical']>
    'LazyLucideFlipVertical2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FlipVertical2']>
    'LazyLucideFlower': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Flower']>
    'LazyLucideFlower2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Flower2']>
    'LazyLucideFocus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Focus']>
    'LazyLucideFoldHorizontal': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FoldHorizontal']>
    'LazyLucideFoldVertical': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FoldVertical']>
    'LazyLucideFolder': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Folder']>
    'LazyLucideFolderArchive': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderArchive']>
    'LazyLucideFolderCheck': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderCheck']>
    'LazyLucideFolderClock': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderClock']>
    'LazyLucideFolderClosed': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderClosed']>
    'LazyLucideFolderCode': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderCode']>
    'LazyLucideFolderCog': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderCog']>
    'LazyLucideFolderCog2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderCog2']>
    'LazyLucideFolderDot': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderDot']>
    'LazyLucideFolderDown': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderDown']>
    'LazyLucideFolderEdit': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderEdit']>
    'LazyLucideFolderGit': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderGit']>
    'LazyLucideFolderGit2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderGit2']>
    'LazyLucideFolderHeart': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderHeart']>
    'LazyLucideFolderInput': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderInput']>
    'LazyLucideFolderKanban': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderKanban']>
    'LazyLucideFolderKey': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderKey']>
    'LazyLucideFolderLock': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderLock']>
    'LazyLucideFolderMinus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderMinus']>
    'LazyLucideFolderOpen': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderOpen']>
    'LazyLucideFolderOpenDot': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderOpenDot']>
    'LazyLucideFolderOutput': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderOutput']>
    'LazyLucideFolderPen': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderPen']>
    'LazyLucideFolderPlus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderPlus']>
    'LazyLucideFolderRoot': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderRoot']>
    'LazyLucideFolderSearch': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderSearch']>
    'LazyLucideFolderSearch2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderSearch2']>
    'LazyLucideFolderSymlink': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderSymlink']>
    'LazyLucideFolderSync': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderSync']>
    'LazyLucideFolderTree': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderTree']>
    'LazyLucideFolderUp': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderUp']>
    'LazyLucideFolderX': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderX']>
    'LazyLucideFolders': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Folders']>
    'LazyLucideFootprints': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Footprints']>
    'LazyLucideForkKnife': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ForkKnife']>
    'LazyLucideForkKnifeCrossed': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ForkKnifeCrossed']>
    'LazyLucideForklift': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Forklift']>
    'LazyLucideFormInput': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FormInput']>
    'LazyLucideForward': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Forward']>
    'LazyLucideFrame': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Frame']>
    'LazyLucideFramer': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Framer']>
    'LazyLucideFrown': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Frown']>
    'LazyLucideFuel': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Fuel']>
    'LazyLucideFullscreen': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Fullscreen']>
    'LazyLucideFunctionSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FunctionSquare']>
    'LazyLucideFunnel': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Funnel']>
    'LazyLucideFunnelPlus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FunnelPlus']>
    'LazyLucideFunnelX': LazyComponent<typeof import("../node_modules/lucide-vue-next")['FunnelX']>
    'LazyLucideGalleryHorizontal': LazyComponent<typeof import("../node_modules/lucide-vue-next")['GalleryHorizontal']>
    'LazyLucideGalleryHorizontalEnd': LazyComponent<typeof import("../node_modules/lucide-vue-next")['GalleryHorizontalEnd']>
    'LazyLucideGalleryThumbnails': LazyComponent<typeof import("../node_modules/lucide-vue-next")['GalleryThumbnails']>
    'LazyLucideGalleryVertical': LazyComponent<typeof import("../node_modules/lucide-vue-next")['GalleryVertical']>
    'LazyLucideGalleryVerticalEnd': LazyComponent<typeof import("../node_modules/lucide-vue-next")['GalleryVerticalEnd']>
    'LazyLucideGamepad': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Gamepad']>
    'LazyLucideGamepad2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Gamepad2']>
    'LazyLucideGanttChart': LazyComponent<typeof import("../node_modules/lucide-vue-next")['GanttChart']>
    'LazyLucideGanttChartSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['GanttChartSquare']>
    'LazyLucideGauge': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Gauge']>
    'LazyLucideGaugeCircle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['GaugeCircle']>
    'LazyLucideGavel': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Gavel']>
    'LazyLucideGem': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Gem']>
    'LazyLucideGhost': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Ghost']>
    'LazyLucideGift': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Gift']>
    'LazyLucideGitBranch': LazyComponent<typeof import("../node_modules/lucide-vue-next")['GitBranch']>
    'LazyLucideGitBranchPlus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['GitBranchPlus']>
    'LazyLucideGitCommit': LazyComponent<typeof import("../node_modules/lucide-vue-next")['GitCommit']>
    'LazyLucideGitCommitHorizontal': LazyComponent<typeof import("../node_modules/lucide-vue-next")['GitCommitHorizontal']>
    'LazyLucideGitCommitVertical': LazyComponent<typeof import("../node_modules/lucide-vue-next")['GitCommitVertical']>
    'LazyLucideGitCompare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['GitCompare']>
    'LazyLucideGitCompareArrows': LazyComponent<typeof import("../node_modules/lucide-vue-next")['GitCompareArrows']>
    'LazyLucideGitFork': LazyComponent<typeof import("../node_modules/lucide-vue-next")['GitFork']>
    'LazyLucideGitGraph': LazyComponent<typeof import("../node_modules/lucide-vue-next")['GitGraph']>
    'LazyLucideGitMerge': LazyComponent<typeof import("../node_modules/lucide-vue-next")['GitMerge']>
    'LazyLucideGitPullRequest': LazyComponent<typeof import("../node_modules/lucide-vue-next")['GitPullRequest']>
    'LazyLucideGitPullRequestArrow': LazyComponent<typeof import("../node_modules/lucide-vue-next")['GitPullRequestArrow']>
    'LazyLucideGitPullRequestClosed': LazyComponent<typeof import("../node_modules/lucide-vue-next")['GitPullRequestClosed']>
    'LazyLucideGitPullRequestCreate': LazyComponent<typeof import("../node_modules/lucide-vue-next")['GitPullRequestCreate']>
    'LazyLucideGitPullRequestCreateArrow': LazyComponent<typeof import("../node_modules/lucide-vue-next")['GitPullRequestCreateArrow']>
    'LazyLucideGitPullRequestDraft': LazyComponent<typeof import("../node_modules/lucide-vue-next")['GitPullRequestDraft']>
    'LazyLucideGithub': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Github']>
    'LazyLucideGitlab': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Gitlab']>
    'LazyLucideGlassWater': LazyComponent<typeof import("../node_modules/lucide-vue-next")['GlassWater']>
    'LazyLucideGlasses': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Glasses']>
    'LazyLucideGlobe': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Globe']>
    'LazyLucideGlobe2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Globe2']>
    'LazyLucideGlobeLock': LazyComponent<typeof import("../node_modules/lucide-vue-next")['GlobeLock']>
    'LazyLucideGoal': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Goal']>
    'LazyLucideGrab': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Grab']>
    'LazyLucideGraduationCap': LazyComponent<typeof import("../node_modules/lucide-vue-next")['GraduationCap']>
    'LazyLucideGrape': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Grape']>
    'LazyLucideGrid': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Grid']>
    'LazyLucideGrid2x2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Grid2x2']>
    'LazyLucideGrid2x2Check': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Grid2x2Check']>
    'LazyLucideGrid2x2Plus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Grid2x2Plus']>
    'LazyLucideGrid2x2X': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Grid2x2X']>
    'LazyLucideGrid3x3': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Grid3x3']>
    'LazyLucideGrip': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Grip']>
    'LazyLucideGripHorizontal': LazyComponent<typeof import("../node_modules/lucide-vue-next")['GripHorizontal']>
    'LazyLucideGripVertical': LazyComponent<typeof import("../node_modules/lucide-vue-next")['GripVertical']>
    'LazyLucideGroup': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Group']>
    'LazyLucideGuitar': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Guitar']>
    'LazyLucideHam': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Ham']>
    'LazyLucideHammer': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Hammer']>
    'LazyLucideHand': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Hand']>
    'LazyLucideHandCoins': LazyComponent<typeof import("../node_modules/lucide-vue-next")['HandCoins']>
    'LazyLucideHandHeart': LazyComponent<typeof import("../node_modules/lucide-vue-next")['HandHeart']>
    'LazyLucideHandHelping': LazyComponent<typeof import("../node_modules/lucide-vue-next")['HandHelping']>
    'LazyLucideHandMetal': LazyComponent<typeof import("../node_modules/lucide-vue-next")['HandMetal']>
    'LazyLucideHandPlatter': LazyComponent<typeof import("../node_modules/lucide-vue-next")['HandPlatter']>
    'LazyLucideHandshake': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Handshake']>
    'LazyLucideHardDrive': LazyComponent<typeof import("../node_modules/lucide-vue-next")['HardDrive']>
    'LazyLucideHardDriveDownload': LazyComponent<typeof import("../node_modules/lucide-vue-next")['HardDriveDownload']>
    'LazyLucideHardDriveUpload': LazyComponent<typeof import("../node_modules/lucide-vue-next")['HardDriveUpload']>
    'LazyLucideHardHat': LazyComponent<typeof import("../node_modules/lucide-vue-next")['HardHat']>
    'LazyLucideHash': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Hash']>
    'LazyLucideHaze': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Haze']>
    'LazyLucideHdmiPort': LazyComponent<typeof import("../node_modules/lucide-vue-next")['HdmiPort']>
    'LazyLucideHeading': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Heading']>
    'LazyLucideHeading1': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Heading1']>
    'LazyLucideHeading2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Heading2']>
    'LazyLucideHeading3': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Heading3']>
    'LazyLucideHeading4': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Heading4']>
    'LazyLucideHeading5': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Heading5']>
    'LazyLucideHeading6': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Heading6']>
    'LazyLucideHeadphoneOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['HeadphoneOff']>
    'LazyLucideHeadphones': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Headphones']>
    'LazyLucideHeadset': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Headset']>
    'LazyLucideHeart': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Heart']>
    'LazyLucideHeartCrack': LazyComponent<typeof import("../node_modules/lucide-vue-next")['HeartCrack']>
    'LazyLucideHeartHandshake': LazyComponent<typeof import("../node_modules/lucide-vue-next")['HeartHandshake']>
    'LazyLucideHeartOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['HeartOff']>
    'LazyLucideHeartPulse': LazyComponent<typeof import("../node_modules/lucide-vue-next")['HeartPulse']>
    'LazyLucideHeater': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Heater']>
    'LazyLucideHelpCircle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['HelpCircle']>
    'LazyLucideHelpingHand': LazyComponent<typeof import("../node_modules/lucide-vue-next")['HelpingHand']>
    'LazyLucideHexagon': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Hexagon']>
    'LazyLucideHighlighter': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Highlighter']>
    'LazyLucideHistory': LazyComponent<typeof import("../node_modules/lucide-vue-next")['History']>
    'LazyLucideHome': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Home']>
    'LazyLucideHop': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Hop']>
    'LazyLucideHopOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['HopOff']>
    'LazyLucideHospital': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Hospital']>
    'LazyLucideHotel': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Hotel']>
    'LazyLucideHourglass': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Hourglass']>
    'LazyLucideHouse': LazyComponent<typeof import("../node_modules/lucide-vue-next")['House']>
    'LazyLucideHousePlug': LazyComponent<typeof import("../node_modules/lucide-vue-next")['HousePlug']>
    'LazyLucideHousePlus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['HousePlus']>
    'LazyLucideHouseWifi': LazyComponent<typeof import("../node_modules/lucide-vue-next")['HouseWifi']>
    'LazyLucideIceCream': LazyComponent<typeof import("../node_modules/lucide-vue-next")['IceCream']>
    'LazyLucideIceCream2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['IceCream2']>
    'LazyLucideIceCreamBowl': LazyComponent<typeof import("../node_modules/lucide-vue-next")['IceCreamBowl']>
    'LazyLucideIceCreamCone': LazyComponent<typeof import("../node_modules/lucide-vue-next")['IceCreamCone']>
    'LazyLucideIdCard': LazyComponent<typeof import("../node_modules/lucide-vue-next")['IdCard']>
    'LazyLucideImage': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Image']>
    'LazyLucideImageDown': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ImageDown']>
    'LazyLucideImageMinus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ImageMinus']>
    'LazyLucideImageOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ImageOff']>
    'LazyLucideImagePlay': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ImagePlay']>
    'LazyLucideImagePlus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ImagePlus']>
    'LazyLucideImageUp': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ImageUp']>
    'LazyLucideImageUpscale': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ImageUpscale']>
    'LazyLucideImages': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Images']>
    'LazyLucideImport': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Import']>
    'LazyLucideInbox': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Inbox']>
    'LazyLucideIndent': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Indent']>
    'LazyLucideIndentDecrease': LazyComponent<typeof import("../node_modules/lucide-vue-next")['IndentDecrease']>
    'LazyLucideIndentIncrease': LazyComponent<typeof import("../node_modules/lucide-vue-next")['IndentIncrease']>
    'LazyLucideIndianRupee': LazyComponent<typeof import("../node_modules/lucide-vue-next")['IndianRupee']>
    'LazyLucideInfinity': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Infinity']>
    'LazyLucideInfo': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Info']>
    'LazyLucideInspect': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Inspect']>
    'LazyLucideInspectionPanel': LazyComponent<typeof import("../node_modules/lucide-vue-next")['InspectionPanel']>
    'LazyLucideInstagram': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Instagram']>
    'LazyLucideItalic': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Italic']>
    'LazyLucideIterationCcw': LazyComponent<typeof import("../node_modules/lucide-vue-next")['IterationCcw']>
    'LazyLucideIterationCw': LazyComponent<typeof import("../node_modules/lucide-vue-next")['IterationCw']>
    'LazyLucideJapaneseYen': LazyComponent<typeof import("../node_modules/lucide-vue-next")['JapaneseYen']>
    'LazyLucideJoystick': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Joystick']>
    'LazyLucideKanban': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Kanban']>
    'LazyLucideKanbanSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['KanbanSquare']>
    'LazyLucideKanbanSquareDashed': LazyComponent<typeof import("../node_modules/lucide-vue-next")['KanbanSquareDashed']>
    'LazyLucideKey': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Key']>
    'LazyLucideKeyRound': LazyComponent<typeof import("../node_modules/lucide-vue-next")['KeyRound']>
    'LazyLucideKeySquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['KeySquare']>
    'LazyLucideKeyboard': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Keyboard']>
    'LazyLucideKeyboardMusic': LazyComponent<typeof import("../node_modules/lucide-vue-next")['KeyboardMusic']>
    'LazyLucideKeyboardOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['KeyboardOff']>
    'LazyLucideLamp': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Lamp']>
    'LazyLucideLampCeiling': LazyComponent<typeof import("../node_modules/lucide-vue-next")['LampCeiling']>
    'LazyLucideLampDesk': LazyComponent<typeof import("../node_modules/lucide-vue-next")['LampDesk']>
    'LazyLucideLampFloor': LazyComponent<typeof import("../node_modules/lucide-vue-next")['LampFloor']>
    'LazyLucideLampWallDown': LazyComponent<typeof import("../node_modules/lucide-vue-next")['LampWallDown']>
    'LazyLucideLampWallUp': LazyComponent<typeof import("../node_modules/lucide-vue-next")['LampWallUp']>
    'LazyLucideLandPlot': LazyComponent<typeof import("../node_modules/lucide-vue-next")['LandPlot']>
    'LazyLucideLandmark': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Landmark']>
    'LazyLucideLanguages': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Languages']>
    'LazyLucideLaptop': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Laptop']>
    'LazyLucideLaptop2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Laptop2']>
    'LazyLucideLaptopMinimal': LazyComponent<typeof import("../node_modules/lucide-vue-next")['LaptopMinimal']>
    'LazyLucideLaptopMinimalCheck': LazyComponent<typeof import("../node_modules/lucide-vue-next")['LaptopMinimalCheck']>
    'LazyLucideLasso': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Lasso']>
    'LazyLucideLassoSelect': LazyComponent<typeof import("../node_modules/lucide-vue-next")['LassoSelect']>
    'LazyLucideLaugh': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Laugh']>
    'LazyLucideLayers': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Layers']>
    'LazyLucideLayers2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Layers2']>
    'LazyLucideLayers3': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Layers3']>
    'LazyLucideLayout': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Layout']>
    'LazyLucideLayoutDashboard': LazyComponent<typeof import("../node_modules/lucide-vue-next")['LayoutDashboard']>
    'LazyLucideLayoutGrid': LazyComponent<typeof import("../node_modules/lucide-vue-next")['LayoutGrid']>
    'LazyLucideLayoutList': LazyComponent<typeof import("../node_modules/lucide-vue-next")['LayoutList']>
    'LazyLucideLayoutPanelLeft': LazyComponent<typeof import("../node_modules/lucide-vue-next")['LayoutPanelLeft']>
    'LazyLucideLayoutPanelTop': LazyComponent<typeof import("../node_modules/lucide-vue-next")['LayoutPanelTop']>
    'LazyLucideLayoutTemplate': LazyComponent<typeof import("../node_modules/lucide-vue-next")['LayoutTemplate']>
    'LazyLucideLeaf': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Leaf']>
    'LazyLucideLeafyGreen': LazyComponent<typeof import("../node_modules/lucide-vue-next")['LeafyGreen']>
    'LazyLucideLectern': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Lectern']>
    'LazyLucideLetterText': LazyComponent<typeof import("../node_modules/lucide-vue-next")['LetterText']>
    'LazyLucideLibrary': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Library']>
    'LazyLucideLibraryBig': LazyComponent<typeof import("../node_modules/lucide-vue-next")['LibraryBig']>
    'LazyLucideLibrarySquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['LibrarySquare']>
    'LazyLucideLifeBuoy': LazyComponent<typeof import("../node_modules/lucide-vue-next")['LifeBuoy']>
    'LazyLucideLigature': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Ligature']>
    'LazyLucideLightbulb': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Lightbulb']>
    'LazyLucideLightbulbOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['LightbulbOff']>
    'LazyLucideLineChart': LazyComponent<typeof import("../node_modules/lucide-vue-next")['LineChart']>
    'LazyLucideLink': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Link']>
    'LazyLucideLink2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Link2']>
    'LazyLucideLink2Off': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Link2Off']>
    'LazyLucideLinkedin': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Linkedin']>
    'LazyLucideList': LazyComponent<typeof import("../node_modules/lucide-vue-next")['List']>
    'LazyLucideListCheck': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ListCheck']>
    'LazyLucideListChecks': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ListChecks']>
    'LazyLucideListCollapse': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ListCollapse']>
    'LazyLucideListEnd': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ListEnd']>
    'LazyLucideListFilter': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ListFilter']>
    'LazyLucideListFilterPlus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ListFilterPlus']>
    'LazyLucideListMinus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ListMinus']>
    'LazyLucideListMusic': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ListMusic']>
    'LazyLucideListOrdered': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ListOrdered']>
    'LazyLucideListPlus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ListPlus']>
    'LazyLucideListRestart': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ListRestart']>
    'LazyLucideListStart': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ListStart']>
    'LazyLucideListTodo': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ListTodo']>
    'LazyLucideListTree': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ListTree']>
    'LazyLucideListVideo': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ListVideo']>
    'LazyLucideListX': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ListX']>
    'LazyLucideLoader': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Loader']>
    'LazyLucideLoader2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Loader2']>
    'LazyLucideLoaderCircle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['LoaderCircle']>
    'LazyLucideLoaderPinwheel': LazyComponent<typeof import("../node_modules/lucide-vue-next")['LoaderPinwheel']>
    'LazyLucideLocate': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Locate']>
    'LazyLucideLocateFixed': LazyComponent<typeof import("../node_modules/lucide-vue-next")['LocateFixed']>
    'LazyLucideLocateOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['LocateOff']>
    'LazyLucideLock': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Lock']>
    'LazyLucideLockKeyhole': LazyComponent<typeof import("../node_modules/lucide-vue-next")['LockKeyhole']>
    'LazyLucideLockKeyholeOpen': LazyComponent<typeof import("../node_modules/lucide-vue-next")['LockKeyholeOpen']>
    'LazyLucideLockOpen': LazyComponent<typeof import("../node_modules/lucide-vue-next")['LockOpen']>
    'LazyLucideLogIn': LazyComponent<typeof import("../node_modules/lucide-vue-next")['LogIn']>
    'LazyLucideLogOut': LazyComponent<typeof import("../node_modules/lucide-vue-next")['LogOut']>
    'LazyLucideLogs': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Logs']>
    'LazyLucideLollipop': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Lollipop']>
    'LazyLucideLuggage': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Luggage']>
    'LazyLucideMSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MSquare']>
    'LazyLucideMagnet': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Magnet']>
    'LazyLucideMail': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Mail']>
    'LazyLucideMailCheck': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MailCheck']>
    'LazyLucideMailMinus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MailMinus']>
    'LazyLucideMailOpen': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MailOpen']>
    'LazyLucideMailPlus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MailPlus']>
    'LazyLucideMailQuestion': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MailQuestion']>
    'LazyLucideMailSearch': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MailSearch']>
    'LazyLucideMailWarning': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MailWarning']>
    'LazyLucideMailX': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MailX']>
    'LazyLucideMailbox': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Mailbox']>
    'LazyLucideMails': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Mails']>
    'LazyLucideMap': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Map']>
    'LazyLucideMapPin': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MapPin']>
    'LazyLucideMapPinCheck': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MapPinCheck']>
    'LazyLucideMapPinCheckInside': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MapPinCheckInside']>
    'LazyLucideMapPinHouse': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MapPinHouse']>
    'LazyLucideMapPinMinus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MapPinMinus']>
    'LazyLucideMapPinMinusInside': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MapPinMinusInside']>
    'LazyLucideMapPinOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MapPinOff']>
    'LazyLucideMapPinPlus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MapPinPlus']>
    'LazyLucideMapPinPlusInside': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MapPinPlusInside']>
    'LazyLucideMapPinX': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MapPinX']>
    'LazyLucideMapPinXInside': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MapPinXInside']>
    'LazyLucideMapPinned': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MapPinned']>
    'LazyLucideMapPlus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MapPlus']>
    'LazyLucideMars': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Mars']>
    'LazyLucideMarsStroke': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MarsStroke']>
    'LazyLucideMartini': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Martini']>
    'LazyLucideMaximize': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Maximize']>
    'LazyLucideMaximize2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Maximize2']>
    'LazyLucideMedal': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Medal']>
    'LazyLucideMegaphone': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Megaphone']>
    'LazyLucideMegaphoneOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MegaphoneOff']>
    'LazyLucideMeh': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Meh']>
    'LazyLucideMemoryStick': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MemoryStick']>
    'LazyLucideMenu': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Menu']>
    'LazyLucideMenuSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MenuSquare']>
    'LazyLucideMerge': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Merge']>
    'LazyLucideMessageCircle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageCircle']>
    'LazyLucideMessageCircleCode': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageCircleCode']>
    'LazyLucideMessageCircleDashed': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageCircleDashed']>
    'LazyLucideMessageCircleHeart': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageCircleHeart']>
    'LazyLucideMessageCircleMore': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageCircleMore']>
    'LazyLucideMessageCircleOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageCircleOff']>
    'LazyLucideMessageCirclePlus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageCirclePlus']>
    'LazyLucideMessageCircleQuestion': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageCircleQuestion']>
    'LazyLucideMessageCircleReply': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageCircleReply']>
    'LazyLucideMessageCircleWarning': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageCircleWarning']>
    'LazyLucideMessageCircleX': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageCircleX']>
    'LazyLucideMessageSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageSquare']>
    'LazyLucideMessageSquareCode': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageSquareCode']>
    'LazyLucideMessageSquareDashed': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageSquareDashed']>
    'LazyLucideMessageSquareDiff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageSquareDiff']>
    'LazyLucideMessageSquareDot': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageSquareDot']>
    'LazyLucideMessageSquareHeart': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageSquareHeart']>
    'LazyLucideMessageSquareLock': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageSquareLock']>
    'LazyLucideMessageSquareMore': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageSquareMore']>
    'LazyLucideMessageSquareOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageSquareOff']>
    'LazyLucideMessageSquarePlus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageSquarePlus']>
    'LazyLucideMessageSquareQuote': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageSquareQuote']>
    'LazyLucideMessageSquareReply': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageSquareReply']>
    'LazyLucideMessageSquareShare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageSquareShare']>
    'LazyLucideMessageSquareText': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageSquareText']>
    'LazyLucideMessageSquareWarning': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageSquareWarning']>
    'LazyLucideMessageSquareX': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageSquareX']>
    'LazyLucideMessagesSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessagesSquare']>
    'LazyLucideMic': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Mic']>
    'LazyLucideMic2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Mic2']>
    'LazyLucideMicOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MicOff']>
    'LazyLucideMicVocal': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MicVocal']>
    'LazyLucideMicrochip': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Microchip']>
    'LazyLucideMicroscope': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Microscope']>
    'LazyLucideMicrowave': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Microwave']>
    'LazyLucideMilestone': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Milestone']>
    'LazyLucideMilk': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Milk']>
    'LazyLucideMilkOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MilkOff']>
    'LazyLucideMinimize': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Minimize']>
    'LazyLucideMinimize2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Minimize2']>
    'LazyLucideMinus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Minus']>
    'LazyLucideMinusCircle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MinusCircle']>
    'LazyLucideMinusSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MinusSquare']>
    'LazyLucideMonitor': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Monitor']>
    'LazyLucideMonitorCheck': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MonitorCheck']>
    'LazyLucideMonitorCog': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MonitorCog']>
    'LazyLucideMonitorDot': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MonitorDot']>
    'LazyLucideMonitorDown': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MonitorDown']>
    'LazyLucideMonitorOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MonitorOff']>
    'LazyLucideMonitorPause': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MonitorPause']>
    'LazyLucideMonitorPlay': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MonitorPlay']>
    'LazyLucideMonitorSmartphone': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MonitorSmartphone']>
    'LazyLucideMonitorSpeaker': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MonitorSpeaker']>
    'LazyLucideMonitorStop': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MonitorStop']>
    'LazyLucideMonitorUp': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MonitorUp']>
    'LazyLucideMonitorX': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MonitorX']>
    'LazyLucideMoon': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Moon']>
    'LazyLucideMoonStar': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MoonStar']>
    'LazyLucideMoreHorizontal': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MoreHorizontal']>
    'LazyLucideMoreVertical': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MoreVertical']>
    'LazyLucideMountain': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Mountain']>
    'LazyLucideMountainSnow': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MountainSnow']>
    'LazyLucideMouse': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Mouse']>
    'LazyLucideMouseOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MouseOff']>
    'LazyLucideMousePointer': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MousePointer']>
    'LazyLucideMousePointer2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MousePointer2']>
    'LazyLucideMousePointerBan': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MousePointerBan']>
    'LazyLucideMousePointerClick': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MousePointerClick']>
    'LazyLucideMousePointerSquareDashed': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MousePointerSquareDashed']>
    'LazyLucideMove': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Move']>
    'LazyLucideMove3d': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Move3d']>
    'LazyLucideMoveDiagonal': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MoveDiagonal']>
    'LazyLucideMoveDiagonal2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MoveDiagonal2']>
    'LazyLucideMoveDown': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MoveDown']>
    'LazyLucideMoveDownLeft': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MoveDownLeft']>
    'LazyLucideMoveDownRight': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MoveDownRight']>
    'LazyLucideMoveHorizontal': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MoveHorizontal']>
    'LazyLucideMoveLeft': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MoveLeft']>
    'LazyLucideMoveRight': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MoveRight']>
    'LazyLucideMoveUp': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MoveUp']>
    'LazyLucideMoveUpLeft': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MoveUpLeft']>
    'LazyLucideMoveUpRight': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MoveUpRight']>
    'LazyLucideMoveVertical': LazyComponent<typeof import("../node_modules/lucide-vue-next")['MoveVertical']>
    'LazyLucideMusic': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Music']>
    'LazyLucideMusic2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Music2']>
    'LazyLucideMusic3': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Music3']>
    'LazyLucideMusic4': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Music4']>
    'LazyLucideNavigation': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Navigation']>
    'LazyLucideNavigation2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Navigation2']>
    'LazyLucideNavigation2Off': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Navigation2Off']>
    'LazyLucideNavigationOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['NavigationOff']>
    'LazyLucideNetwork': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Network']>
    'LazyLucideNewspaper': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Newspaper']>
    'LazyLucideNfc': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Nfc']>
    'LazyLucideNonBinary': LazyComponent<typeof import("../node_modules/lucide-vue-next")['NonBinary']>
    'LazyLucideNotebook': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Notebook']>
    'LazyLucideNotebookPen': LazyComponent<typeof import("../node_modules/lucide-vue-next")['NotebookPen']>
    'LazyLucideNotebookTabs': LazyComponent<typeof import("../node_modules/lucide-vue-next")['NotebookTabs']>
    'LazyLucideNotebookText': LazyComponent<typeof import("../node_modules/lucide-vue-next")['NotebookText']>
    'LazyLucideNotepadText': LazyComponent<typeof import("../node_modules/lucide-vue-next")['NotepadText']>
    'LazyLucideNotepadTextDashed': LazyComponent<typeof import("../node_modules/lucide-vue-next")['NotepadTextDashed']>
    'LazyLucideNut': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Nut']>
    'LazyLucideNutOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['NutOff']>
    'LazyLucideOctagon': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Octagon']>
    'LazyLucideOctagonAlert': LazyComponent<typeof import("../node_modules/lucide-vue-next")['OctagonAlert']>
    'LazyLucideOctagonMinus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['OctagonMinus']>
    'LazyLucideOctagonPause': LazyComponent<typeof import("../node_modules/lucide-vue-next")['OctagonPause']>
    'LazyLucideOctagonX': LazyComponent<typeof import("../node_modules/lucide-vue-next")['OctagonX']>
    'LazyLucideOmega': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Omega']>
    'LazyLucideOption': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Option']>
    'LazyLucideOrbit': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Orbit']>
    'LazyLucideOrigami': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Origami']>
    'LazyLucideOutdent': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Outdent']>
    'LazyLucidePackage': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Package']>
    'LazyLucidePackage2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Package2']>
    'LazyLucidePackageCheck': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PackageCheck']>
    'LazyLucidePackageMinus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PackageMinus']>
    'LazyLucidePackageOpen': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PackageOpen']>
    'LazyLucidePackagePlus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PackagePlus']>
    'LazyLucidePackageSearch': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PackageSearch']>
    'LazyLucidePackageX': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PackageX']>
    'LazyLucidePaintBucket': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PaintBucket']>
    'LazyLucidePaintRoller': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PaintRoller']>
    'LazyLucidePaintbrush': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Paintbrush']>
    'LazyLucidePaintbrush2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Paintbrush2']>
    'LazyLucidePaintbrushVertical': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PaintbrushVertical']>
    'LazyLucidePalette': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Palette']>
    'LazyLucidePalmtree': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Palmtree']>
    'LazyLucidePanelBottom': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelBottom']>
    'LazyLucidePanelBottomClose': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelBottomClose']>
    'LazyLucidePanelBottomDashed': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelBottomDashed']>
    'LazyLucidePanelBottomInactive': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelBottomInactive']>
    'LazyLucidePanelBottomOpen': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelBottomOpen']>
    'LazyLucidePanelLeft': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelLeft']>
    'LazyLucidePanelLeftClose': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelLeftClose']>
    'LazyLucidePanelLeftDashed': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelLeftDashed']>
    'LazyLucidePanelLeftInactive': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelLeftInactive']>
    'LazyLucidePanelLeftOpen': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelLeftOpen']>
    'LazyLucidePanelRight': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelRight']>
    'LazyLucidePanelRightClose': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelRightClose']>
    'LazyLucidePanelRightDashed': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelRightDashed']>
    'LazyLucidePanelRightInactive': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelRightInactive']>
    'LazyLucidePanelRightOpen': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelRightOpen']>
    'LazyLucidePanelTop': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelTop']>
    'LazyLucidePanelTopClose': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelTopClose']>
    'LazyLucidePanelTopDashed': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelTopDashed']>
    'LazyLucidePanelTopInactive': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelTopInactive']>
    'LazyLucidePanelTopOpen': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelTopOpen']>
    'LazyLucidePanelsLeftBottom': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelsLeftBottom']>
    'LazyLucidePanelsLeftRight': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelsLeftRight']>
    'LazyLucidePanelsRightBottom': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelsRightBottom']>
    'LazyLucidePanelsTopBottom': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelsTopBottom']>
    'LazyLucidePanelsTopLeft': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelsTopLeft']>
    'LazyLucidePaperclip': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Paperclip']>
    'LazyLucideParentheses': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Parentheses']>
    'LazyLucideParkingCircle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ParkingCircle']>
    'LazyLucideParkingCircleOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ParkingCircleOff']>
    'LazyLucideParkingMeter': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ParkingMeter']>
    'LazyLucideParkingSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ParkingSquare']>
    'LazyLucideParkingSquareOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ParkingSquareOff']>
    'LazyLucidePartyPopper': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PartyPopper']>
    'LazyLucidePause': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Pause']>
    'LazyLucidePauseCircle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PauseCircle']>
    'LazyLucidePauseOctagon': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PauseOctagon']>
    'LazyLucidePawPrint': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PawPrint']>
    'LazyLucidePcCase': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PcCase']>
    'LazyLucidePen': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Pen']>
    'LazyLucidePenBox': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PenBox']>
    'LazyLucidePenLine': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PenLine']>
    'LazyLucidePenOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PenOff']>
    'LazyLucidePenSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PenSquare']>
    'LazyLucidePenTool': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PenTool']>
    'LazyLucidePencil': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Pencil']>
    'LazyLucidePencilLine': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PencilLine']>
    'LazyLucidePencilOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PencilOff']>
    'LazyLucidePencilRuler': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PencilRuler']>
    'LazyLucidePentagon': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Pentagon']>
    'LazyLucidePercent': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Percent']>
    'LazyLucidePercentCircle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PercentCircle']>
    'LazyLucidePercentDiamond': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PercentDiamond']>
    'LazyLucidePercentSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PercentSquare']>
    'LazyLucidePersonStanding': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PersonStanding']>
    'LazyLucidePhilippinePeso': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PhilippinePeso']>
    'LazyLucidePhone': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Phone']>
    'LazyLucidePhoneCall': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PhoneCall']>
    'LazyLucidePhoneForwarded': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PhoneForwarded']>
    'LazyLucidePhoneIncoming': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PhoneIncoming']>
    'LazyLucidePhoneMissed': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PhoneMissed']>
    'LazyLucidePhoneOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PhoneOff']>
    'LazyLucidePhoneOutgoing': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PhoneOutgoing']>
    'LazyLucidePi': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Pi']>
    'LazyLucidePiSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PiSquare']>
    'LazyLucidePiano': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Piano']>
    'LazyLucidePickaxe': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Pickaxe']>
    'LazyLucidePictureInPicture': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PictureInPicture']>
    'LazyLucidePictureInPicture2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PictureInPicture2']>
    'LazyLucidePieChart': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PieChart']>
    'LazyLucidePiggyBank': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PiggyBank']>
    'LazyLucidePilcrow': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Pilcrow']>
    'LazyLucidePilcrowLeft': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PilcrowLeft']>
    'LazyLucidePilcrowRight': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PilcrowRight']>
    'LazyLucidePilcrowSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PilcrowSquare']>
    'LazyLucidePill': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Pill']>
    'LazyLucidePillBottle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PillBottle']>
    'LazyLucidePin': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Pin']>
    'LazyLucidePinOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PinOff']>
    'LazyLucidePipette': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Pipette']>
    'LazyLucidePizza': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Pizza']>
    'LazyLucidePlane': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Plane']>
    'LazyLucidePlaneLanding': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PlaneLanding']>
    'LazyLucidePlaneTakeoff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PlaneTakeoff']>
    'LazyLucidePlay': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Play']>
    'LazyLucidePlayCircle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PlayCircle']>
    'LazyLucidePlaySquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PlaySquare']>
    'LazyLucidePlug': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Plug']>
    'LazyLucidePlug2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Plug2']>
    'LazyLucidePlugZap': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PlugZap']>
    'LazyLucidePlugZap2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PlugZap2']>
    'LazyLucidePlus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Plus']>
    'LazyLucidePlusCircle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PlusCircle']>
    'LazyLucidePlusSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PlusSquare']>
    'LazyLucidePocket': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Pocket']>
    'LazyLucidePocketKnife': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PocketKnife']>
    'LazyLucidePodcast': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Podcast']>
    'LazyLucidePointer': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Pointer']>
    'LazyLucidePointerOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PointerOff']>
    'LazyLucidePopcorn': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Popcorn']>
    'LazyLucidePopsicle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Popsicle']>
    'LazyLucidePoundSterling': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PoundSterling']>
    'LazyLucidePower': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Power']>
    'LazyLucidePowerCircle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PowerCircle']>
    'LazyLucidePowerOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PowerOff']>
    'LazyLucidePowerSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PowerSquare']>
    'LazyLucidePresentation': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Presentation']>
    'LazyLucidePrinter': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Printer']>
    'LazyLucidePrinterCheck': LazyComponent<typeof import("../node_modules/lucide-vue-next")['PrinterCheck']>
    'LazyLucideProjector': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Projector']>
    'LazyLucideProportions': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Proportions']>
    'LazyLucidePuzzle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Puzzle']>
    'LazyLucidePyramid': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Pyramid']>
    'LazyLucideQrCode': LazyComponent<typeof import("../node_modules/lucide-vue-next")['QrCode']>
    'LazyLucideQuote': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Quote']>
    'LazyLucideRabbit': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Rabbit']>
    'LazyLucideRadar': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Radar']>
    'LazyLucideRadiation': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Radiation']>
    'LazyLucideRadical': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Radical']>
    'LazyLucideRadio': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Radio']>
    'LazyLucideRadioReceiver': LazyComponent<typeof import("../node_modules/lucide-vue-next")['RadioReceiver']>
    'LazyLucideRadioTower': LazyComponent<typeof import("../node_modules/lucide-vue-next")['RadioTower']>
    'LazyLucideRadius': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Radius']>
    'LazyLucideRailSymbol': LazyComponent<typeof import("../node_modules/lucide-vue-next")['RailSymbol']>
    'LazyLucideRainbow': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Rainbow']>
    'LazyLucideRat': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Rat']>
    'LazyLucideRatio': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Ratio']>
    'LazyLucideReceipt': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Receipt']>
    'LazyLucideReceiptCent': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ReceiptCent']>
    'LazyLucideReceiptEuro': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ReceiptEuro']>
    'LazyLucideReceiptIndianRupee': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ReceiptIndianRupee']>
    'LazyLucideReceiptJapaneseYen': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ReceiptJapaneseYen']>
    'LazyLucideReceiptPoundSterling': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ReceiptPoundSterling']>
    'LazyLucideReceiptRussianRuble': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ReceiptRussianRuble']>
    'LazyLucideReceiptSwissFranc': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ReceiptSwissFranc']>
    'LazyLucideReceiptText': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ReceiptText']>
    'LazyLucideRectangleEllipsis': LazyComponent<typeof import("../node_modules/lucide-vue-next")['RectangleEllipsis']>
    'LazyLucideRectangleHorizontal': LazyComponent<typeof import("../node_modules/lucide-vue-next")['RectangleHorizontal']>
    'LazyLucideRectangleVertical': LazyComponent<typeof import("../node_modules/lucide-vue-next")['RectangleVertical']>
    'LazyLucideRecycle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Recycle']>
    'LazyLucideRedo': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Redo']>
    'LazyLucideRedo2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Redo2']>
    'LazyLucideRedoDot': LazyComponent<typeof import("../node_modules/lucide-vue-next")['RedoDot']>
    'LazyLucideRefreshCcw': LazyComponent<typeof import("../node_modules/lucide-vue-next")['RefreshCcw']>
    'LazyLucideRefreshCcwDot': LazyComponent<typeof import("../node_modules/lucide-vue-next")['RefreshCcwDot']>
    'LazyLucideRefreshCw': LazyComponent<typeof import("../node_modules/lucide-vue-next")['RefreshCw']>
    'LazyLucideRefreshCwOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['RefreshCwOff']>
    'LazyLucideRefrigerator': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Refrigerator']>
    'LazyLucideRegex': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Regex']>
    'LazyLucideRemoveFormatting': LazyComponent<typeof import("../node_modules/lucide-vue-next")['RemoveFormatting']>
    'LazyLucideRepeat': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Repeat']>
    'LazyLucideRepeat1': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Repeat1']>
    'LazyLucideRepeat2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Repeat2']>
    'LazyLucideReplace': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Replace']>
    'LazyLucideReplaceAll': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ReplaceAll']>
    'LazyLucideReply': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Reply']>
    'LazyLucideReplyAll': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ReplyAll']>
    'LazyLucideRewind': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Rewind']>
    'LazyLucideRibbon': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Ribbon']>
    'LazyLucideRocket': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Rocket']>
    'LazyLucideRockingChair': LazyComponent<typeof import("../node_modules/lucide-vue-next")['RockingChair']>
    'LazyLucideRollerCoaster': LazyComponent<typeof import("../node_modules/lucide-vue-next")['RollerCoaster']>
    'LazyLucideRotate3d': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Rotate3d']>
    'LazyLucideRotateCcw': LazyComponent<typeof import("../node_modules/lucide-vue-next")['RotateCcw']>
    'LazyLucideRotateCcwSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['RotateCcwSquare']>
    'LazyLucideRotateCw': LazyComponent<typeof import("../node_modules/lucide-vue-next")['RotateCw']>
    'LazyLucideRotateCwSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['RotateCwSquare']>
    'LazyLucideRoute': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Route']>
    'LazyLucideRouteOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['RouteOff']>
    'LazyLucideRouter': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Router']>
    'LazyLucideRows': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Rows']>
    'LazyLucideRows2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Rows2']>
    'LazyLucideRows3': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Rows3']>
    'LazyLucideRows4': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Rows4']>
    'LazyLucideRss': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Rss']>
    'LazyLucideRuler': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Ruler']>
    'LazyLucideRussianRuble': LazyComponent<typeof import("../node_modules/lucide-vue-next")['RussianRuble']>
    'LazyLucideSailboat': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Sailboat']>
    'LazyLucideSalad': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Salad']>
    'LazyLucideSandwich': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Sandwich']>
    'LazyLucideSatellite': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Satellite']>
    'LazyLucideSatelliteDish': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SatelliteDish']>
    'LazyLucideSaudiRiyal': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SaudiRiyal']>
    'LazyLucideSave': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Save']>
    'LazyLucideSaveAll': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SaveAll']>
    'LazyLucideSaveOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SaveOff']>
    'LazyLucideScale': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Scale']>
    'LazyLucideScale3d': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Scale3d']>
    'LazyLucideScaling': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Scaling']>
    'LazyLucideScan': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Scan']>
    'LazyLucideScanBarcode': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ScanBarcode']>
    'LazyLucideScanEye': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ScanEye']>
    'LazyLucideScanFace': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ScanFace']>
    'LazyLucideScanHeart': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ScanHeart']>
    'LazyLucideScanLine': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ScanLine']>
    'LazyLucideScanQrCode': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ScanQrCode']>
    'LazyLucideScanSearch': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ScanSearch']>
    'LazyLucideScanText': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ScanText']>
    'LazyLucideScatterChart': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ScatterChart']>
    'LazyLucideSchool': LazyComponent<typeof import("../node_modules/lucide-vue-next")['School']>
    'LazyLucideSchool2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['School2']>
    'LazyLucideScissors': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Scissors']>
    'LazyLucideScissorsLineDashed': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ScissorsLineDashed']>
    'LazyLucideScissorsSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ScissorsSquare']>
    'LazyLucideScissorsSquareDashedBottom': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ScissorsSquareDashedBottom']>
    'LazyLucideScreenShare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ScreenShare']>
    'LazyLucideScreenShareOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ScreenShareOff']>
    'LazyLucideScroll': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Scroll']>
    'LazyLucideScrollText': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ScrollText']>
    'LazyLucideSearch': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Search']>
    'LazyLucideSearchCheck': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SearchCheck']>
    'LazyLucideSearchCode': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SearchCode']>
    'LazyLucideSearchSlash': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SearchSlash']>
    'LazyLucideSearchX': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SearchX']>
    'LazyLucideSection': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Section']>
    'LazyLucideSend': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Send']>
    'LazyLucideSendHorizonal': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SendHorizonal']>
    'LazyLucideSendHorizontal': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SendHorizontal']>
    'LazyLucideSendToBack': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SendToBack']>
    'LazyLucideSeparatorHorizontal': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SeparatorHorizontal']>
    'LazyLucideSeparatorVertical': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SeparatorVertical']>
    'LazyLucideServer': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Server']>
    'LazyLucideServerCog': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ServerCog']>
    'LazyLucideServerCrash': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ServerCrash']>
    'LazyLucideServerOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ServerOff']>
    'LazyLucideSettings': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Settings']>
    'LazyLucideSettings2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Settings2']>
    'LazyLucideShapes': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Shapes']>
    'LazyLucideShare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Share']>
    'LazyLucideShare2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Share2']>
    'LazyLucideSheet': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Sheet']>
    'LazyLucideShell': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Shell']>
    'LazyLucideShield': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Shield']>
    'LazyLucideShieldAlert': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ShieldAlert']>
    'LazyLucideShieldBan': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ShieldBan']>
    'LazyLucideShieldCheck': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ShieldCheck']>
    'LazyLucideShieldClose': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ShieldClose']>
    'LazyLucideShieldEllipsis': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ShieldEllipsis']>
    'LazyLucideShieldHalf': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ShieldHalf']>
    'LazyLucideShieldMinus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ShieldMinus']>
    'LazyLucideShieldOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ShieldOff']>
    'LazyLucideShieldPlus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ShieldPlus']>
    'LazyLucideShieldQuestion': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ShieldQuestion']>
    'LazyLucideShieldUser': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ShieldUser']>
    'LazyLucideShieldX': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ShieldX']>
    'LazyLucideShip': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Ship']>
    'LazyLucideShipWheel': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ShipWheel']>
    'LazyLucideShirt': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Shirt']>
    'LazyLucideShoppingBag': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ShoppingBag']>
    'LazyLucideShoppingBasket': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ShoppingBasket']>
    'LazyLucideShoppingCart': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ShoppingCart']>
    'LazyLucideShovel': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Shovel']>
    'LazyLucideShowerHead': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ShowerHead']>
    'LazyLucideShrimp': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Shrimp']>
    'LazyLucideShrink': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Shrink']>
    'LazyLucideShrub': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Shrub']>
    'LazyLucideShuffle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Shuffle']>
    'LazyLucideSidebar': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Sidebar']>
    'LazyLucideSidebarClose': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SidebarClose']>
    'LazyLucideSidebarOpen': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SidebarOpen']>
    'LazyLucideSigma': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Sigma']>
    'LazyLucideSigmaSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SigmaSquare']>
    'LazyLucideSignal': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Signal']>
    'LazyLucideSignalHigh': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SignalHigh']>
    'LazyLucideSignalLow': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SignalLow']>
    'LazyLucideSignalMedium': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SignalMedium']>
    'LazyLucideSignalZero': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SignalZero']>
    'LazyLucideSignature': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Signature']>
    'LazyLucideSignpost': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Signpost']>
    'LazyLucideSignpostBig': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SignpostBig']>
    'LazyLucideSiren': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Siren']>
    'LazyLucideSkipBack': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SkipBack']>
    'LazyLucideSkipForward': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SkipForward']>
    'LazyLucideSkull': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Skull']>
    'LazyLucideSlack': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Slack']>
    'LazyLucideSlash': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Slash']>
    'LazyLucideSlashSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SlashSquare']>
    'LazyLucideSlice': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Slice']>
    'LazyLucideSliders': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Sliders']>
    'LazyLucideSlidersHorizontal': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SlidersHorizontal']>
    'LazyLucideSlidersVertical': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SlidersVertical']>
    'LazyLucideSmartphone': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Smartphone']>
    'LazyLucideSmartphoneCharging': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SmartphoneCharging']>
    'LazyLucideSmartphoneNfc': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SmartphoneNfc']>
    'LazyLucideSmile': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Smile']>
    'LazyLucideSmilePlus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SmilePlus']>
    'LazyLucideSnail': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Snail']>
    'LazyLucideSnowflake': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Snowflake']>
    'LazyLucideSofa': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Sofa']>
    'LazyLucideSortAsc': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SortAsc']>
    'LazyLucideSortDesc': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SortDesc']>
    'LazyLucideSoup': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Soup']>
    'LazyLucideSpace': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Space']>
    'LazyLucideSpade': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Spade']>
    'LazyLucideSparkle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Sparkle']>
    'LazyLucideSparkles': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Sparkles']>
    'LazyLucideSpeaker': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Speaker']>
    'LazyLucideSpeech': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Speech']>
    'LazyLucideSpellCheck': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SpellCheck']>
    'LazyLucideSpellCheck2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SpellCheck2']>
    'LazyLucideSpline': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Spline']>
    'LazyLucideSplinePointer': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SplinePointer']>
    'LazyLucideSplit': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Split']>
    'LazyLucideSplitSquareHorizontal': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SplitSquareHorizontal']>
    'LazyLucideSplitSquareVertical': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SplitSquareVertical']>
    'LazyLucideSprayCan': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SprayCan']>
    'LazyLucideSprout': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Sprout']>
    'LazyLucideSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Square']>
    'LazyLucideSquareActivity': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareActivity']>
    'LazyLucideSquareArrowDown': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareArrowDown']>
    'LazyLucideSquareArrowDownLeft': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareArrowDownLeft']>
    'LazyLucideSquareArrowDownRight': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareArrowDownRight']>
    'LazyLucideSquareArrowLeft': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareArrowLeft']>
    'LazyLucideSquareArrowOutDownLeft': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareArrowOutDownLeft']>
    'LazyLucideSquareArrowOutDownRight': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareArrowOutDownRight']>
    'LazyLucideSquareArrowOutUpLeft': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareArrowOutUpLeft']>
    'LazyLucideSquareArrowOutUpRight': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareArrowOutUpRight']>
    'LazyLucideSquareArrowRight': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareArrowRight']>
    'LazyLucideSquareArrowUp': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareArrowUp']>
    'LazyLucideSquareArrowUpLeft': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareArrowUpLeft']>
    'LazyLucideSquareArrowUpRight': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareArrowUpRight']>
    'LazyLucideSquareAsterisk': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareAsterisk']>
    'LazyLucideSquareBottomDashedScissors': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareBottomDashedScissors']>
    'LazyLucideSquareChartGantt': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareChartGantt']>
    'LazyLucideSquareCheck': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareCheck']>
    'LazyLucideSquareCheckBig': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareCheckBig']>
    'LazyLucideSquareChevronDown': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareChevronDown']>
    'LazyLucideSquareChevronLeft': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareChevronLeft']>
    'LazyLucideSquareChevronRight': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareChevronRight']>
    'LazyLucideSquareChevronUp': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareChevronUp']>
    'LazyLucideSquareCode': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareCode']>
    'LazyLucideSquareDashed': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareDashed']>
    'LazyLucideSquareDashedBottom': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareDashedBottom']>
    'LazyLucideSquareDashedBottomCode': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareDashedBottomCode']>
    'LazyLucideSquareDashedKanban': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareDashedKanban']>
    'LazyLucideSquareDashedMousePointer': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareDashedMousePointer']>
    'LazyLucideSquareDivide': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareDivide']>
    'LazyLucideSquareDot': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareDot']>
    'LazyLucideSquareEqual': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareEqual']>
    'LazyLucideSquareFunction': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareFunction']>
    'LazyLucideSquareGanttChart': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareGanttChart']>
    'LazyLucideSquareKanban': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareKanban']>
    'LazyLucideSquareLibrary': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareLibrary']>
    'LazyLucideSquareM': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareM']>
    'LazyLucideSquareMenu': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareMenu']>
    'LazyLucideSquareMinus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareMinus']>
    'LazyLucideSquareMousePointer': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareMousePointer']>
    'LazyLucideSquareParking': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareParking']>
    'LazyLucideSquareParkingOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareParkingOff']>
    'LazyLucideSquarePen': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquarePen']>
    'LazyLucideSquarePercent': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquarePercent']>
    'LazyLucideSquarePi': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquarePi']>
    'LazyLucideSquarePilcrow': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquarePilcrow']>
    'LazyLucideSquarePlay': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquarePlay']>
    'LazyLucideSquarePlus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquarePlus']>
    'LazyLucideSquarePower': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquarePower']>
    'LazyLucideSquareRadical': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareRadical']>
    'LazyLucideSquareRoundCorner': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareRoundCorner']>
    'LazyLucideSquareScissors': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareScissors']>
    'LazyLucideSquareSigma': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareSigma']>
    'LazyLucideSquareSlash': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareSlash']>
    'LazyLucideSquareSplitHorizontal': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareSplitHorizontal']>
    'LazyLucideSquareSplitVertical': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareSplitVertical']>
    'LazyLucideSquareSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareSquare']>
    'LazyLucideSquareStack': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareStack']>
    'LazyLucideSquareTerminal': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareTerminal']>
    'LazyLucideSquareUser': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareUser']>
    'LazyLucideSquareUserRound': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareUserRound']>
    'LazyLucideSquareX': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareX']>
    'LazyLucideSquircle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Squircle']>
    'LazyLucideSquirrel': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Squirrel']>
    'LazyLucideStamp': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Stamp']>
    'LazyLucideStar': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Star']>
    'LazyLucideStarHalf': LazyComponent<typeof import("../node_modules/lucide-vue-next")['StarHalf']>
    'LazyLucideStarOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['StarOff']>
    'LazyLucideStars': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Stars']>
    'LazyLucideStepBack': LazyComponent<typeof import("../node_modules/lucide-vue-next")['StepBack']>
    'LazyLucideStepForward': LazyComponent<typeof import("../node_modules/lucide-vue-next")['StepForward']>
    'LazyLucideStethoscope': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Stethoscope']>
    'LazyLucideSticker': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Sticker']>
    'LazyLucideStickyNote': LazyComponent<typeof import("../node_modules/lucide-vue-next")['StickyNote']>
    'LazyLucideStopCircle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['StopCircle']>
    'LazyLucideStore': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Store']>
    'LazyLucideStretchHorizontal': LazyComponent<typeof import("../node_modules/lucide-vue-next")['StretchHorizontal']>
    'LazyLucideStretchVertical': LazyComponent<typeof import("../node_modules/lucide-vue-next")['StretchVertical']>
    'LazyLucideStrikethrough': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Strikethrough']>
    'LazyLucideSubscript': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Subscript']>
    'LazyLucideSubtitles': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Subtitles']>
    'LazyLucideSun': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Sun']>
    'LazyLucideSunDim': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SunDim']>
    'LazyLucideSunMedium': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SunMedium']>
    'LazyLucideSunMoon': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SunMoon']>
    'LazyLucideSunSnow': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SunSnow']>
    'LazyLucideSunrise': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Sunrise']>
    'LazyLucideSunset': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Sunset']>
    'LazyLucideSuperscript': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Superscript']>
    'LazyLucideSwatchBook': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SwatchBook']>
    'LazyLucideSwissFranc': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SwissFranc']>
    'LazyLucideSwitchCamera': LazyComponent<typeof import("../node_modules/lucide-vue-next")['SwitchCamera']>
    'LazyLucideSword': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Sword']>
    'LazyLucideSwords': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Swords']>
    'LazyLucideSyringe': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Syringe']>
    'LazyLucideTable': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Table']>
    'LazyLucideTable2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Table2']>
    'LazyLucideTableCellsMerge': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TableCellsMerge']>
    'LazyLucideTableCellsSplit': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TableCellsSplit']>
    'LazyLucideTableColumnsSplit': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TableColumnsSplit']>
    'LazyLucideTableOfContents': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TableOfContents']>
    'LazyLucideTableProperties': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TableProperties']>
    'LazyLucideTableRowsSplit': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TableRowsSplit']>
    'LazyLucideTablet': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Tablet']>
    'LazyLucideTabletSmartphone': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TabletSmartphone']>
    'LazyLucideTablets': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Tablets']>
    'LazyLucideTag': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Tag']>
    'LazyLucideTags': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Tags']>
    'LazyLucideTally1': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Tally1']>
    'LazyLucideTally2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Tally2']>
    'LazyLucideTally3': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Tally3']>
    'LazyLucideTally4': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Tally4']>
    'LazyLucideTally5': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Tally5']>
    'LazyLucideTangent': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Tangent']>
    'LazyLucideTarget': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Target']>
    'LazyLucideTelescope': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Telescope']>
    'LazyLucideTent': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Tent']>
    'LazyLucideTentTree': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TentTree']>
    'LazyLucideTerminal': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Terminal']>
    'LazyLucideTerminalSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TerminalSquare']>
    'LazyLucideTestTube': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TestTube']>
    'LazyLucideTestTube2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TestTube2']>
    'LazyLucideTestTubeDiagonal': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TestTubeDiagonal']>
    'LazyLucideTestTubes': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TestTubes']>
    'LazyLucideText': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Text']>
    'LazyLucideTextCursor': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TextCursor']>
    'LazyLucideTextCursorInput': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TextCursorInput']>
    'LazyLucideTextQuote': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TextQuote']>
    'LazyLucideTextSearch': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TextSearch']>
    'LazyLucideTextSelect': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TextSelect']>
    'LazyLucideTextSelection': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TextSelection']>
    'LazyLucideTheater': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Theater']>
    'LazyLucideThermometer': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Thermometer']>
    'LazyLucideThermometerSnowflake': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ThermometerSnowflake']>
    'LazyLucideThermometerSun': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ThermometerSun']>
    'LazyLucideThumbsDown': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ThumbsDown']>
    'LazyLucideThumbsUp': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ThumbsUp']>
    'LazyLucideTicket': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Ticket']>
    'LazyLucideTicketCheck': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TicketCheck']>
    'LazyLucideTicketMinus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TicketMinus']>
    'LazyLucideTicketPercent': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TicketPercent']>
    'LazyLucideTicketPlus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TicketPlus']>
    'LazyLucideTicketSlash': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TicketSlash']>
    'LazyLucideTicketX': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TicketX']>
    'LazyLucideTickets': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Tickets']>
    'LazyLucideTicketsPlane': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TicketsPlane']>
    'LazyLucideTimer': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Timer']>
    'LazyLucideTimerOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TimerOff']>
    'LazyLucideTimerReset': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TimerReset']>
    'LazyLucideToggleLeft': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ToggleLeft']>
    'LazyLucideToggleRight': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ToggleRight']>
    'LazyLucideToilet': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Toilet']>
    'LazyLucideTornado': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Tornado']>
    'LazyLucideTorus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Torus']>
    'LazyLucideTouchpad': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Touchpad']>
    'LazyLucideTouchpadOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TouchpadOff']>
    'LazyLucideTowerControl': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TowerControl']>
    'LazyLucideToyBrick': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ToyBrick']>
    'LazyLucideTractor': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Tractor']>
    'LazyLucideTrafficCone': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TrafficCone']>
    'LazyLucideTrain': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Train']>
    'LazyLucideTrainFront': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TrainFront']>
    'LazyLucideTrainFrontTunnel': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TrainFrontTunnel']>
    'LazyLucideTrainTrack': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TrainTrack']>
    'LazyLucideTramFront': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TramFront']>
    'LazyLucideTransgender': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Transgender']>
    'LazyLucideTrash': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Trash']>
    'LazyLucideTrash2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Trash2']>
    'LazyLucideTreeDeciduous': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TreeDeciduous']>
    'LazyLucideTreePalm': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TreePalm']>
    'LazyLucideTreePine': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TreePine']>
    'LazyLucideTrees': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Trees']>
    'LazyLucideTrello': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Trello']>
    'LazyLucideTrendingDown': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TrendingDown']>
    'LazyLucideTrendingUp': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TrendingUp']>
    'LazyLucideTrendingUpDown': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TrendingUpDown']>
    'LazyLucideTriangle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Triangle']>
    'LazyLucideTriangleAlert': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TriangleAlert']>
    'LazyLucideTriangleDashed': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TriangleDashed']>
    'LazyLucideTriangleRight': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TriangleRight']>
    'LazyLucideTrophy': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Trophy']>
    'LazyLucideTruck': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Truck']>
    'LazyLucideTurtle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Turtle']>
    'LazyLucideTv': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Tv']>
    'LazyLucideTv2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Tv2']>
    'LazyLucideTvMinimal': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TvMinimal']>
    'LazyLucideTvMinimalPlay': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TvMinimalPlay']>
    'LazyLucideTwitch': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Twitch']>
    'LazyLucideTwitter': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Twitter']>
    'LazyLucideType': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Type']>
    'LazyLucideTypeOutline': LazyComponent<typeof import("../node_modules/lucide-vue-next")['TypeOutline']>
    'LazyLucideUmbrella': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Umbrella']>
    'LazyLucideUmbrellaOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['UmbrellaOff']>
    'LazyLucideUnderline': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Underline']>
    'LazyLucideUndo': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Undo']>
    'LazyLucideUndo2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Undo2']>
    'LazyLucideUndoDot': LazyComponent<typeof import("../node_modules/lucide-vue-next")['UndoDot']>
    'LazyLucideUnfoldHorizontal': LazyComponent<typeof import("../node_modules/lucide-vue-next")['UnfoldHorizontal']>
    'LazyLucideUnfoldVertical': LazyComponent<typeof import("../node_modules/lucide-vue-next")['UnfoldVertical']>
    'LazyLucideUngroup': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Ungroup']>
    'LazyLucideUniversity': LazyComponent<typeof import("../node_modules/lucide-vue-next")['University']>
    'LazyLucideUnlink': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Unlink']>
    'LazyLucideUnlink2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Unlink2']>
    'LazyLucideUnlock': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Unlock']>
    'LazyLucideUnlockKeyhole': LazyComponent<typeof import("../node_modules/lucide-vue-next")['UnlockKeyhole']>
    'LazyLucideUnplug': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Unplug']>
    'LazyLucideUpload': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Upload']>
    'LazyLucideUploadCloud': LazyComponent<typeof import("../node_modules/lucide-vue-next")['UploadCloud']>
    'LazyLucideUsb': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Usb']>
    'LazyLucideUser': LazyComponent<typeof import("../node_modules/lucide-vue-next")['User']>
    'LazyLucideUser2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['User2']>
    'LazyLucideUserCheck': LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserCheck']>
    'LazyLucideUserCheck2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserCheck2']>
    'LazyLucideUserCircle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserCircle']>
    'LazyLucideUserCircle2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserCircle2']>
    'LazyLucideUserCog': LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserCog']>
    'LazyLucideUserCog2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserCog2']>
    'LazyLucideUserMinus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserMinus']>
    'LazyLucideUserMinus2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserMinus2']>
    'LazyLucideUserPen': LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserPen']>
    'LazyLucideUserPlus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserPlus']>
    'LazyLucideUserPlus2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserPlus2']>
    'LazyLucideUserRound': LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserRound']>
    'LazyLucideUserRoundCheck': LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserRoundCheck']>
    'LazyLucideUserRoundCog': LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserRoundCog']>
    'LazyLucideUserRoundMinus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserRoundMinus']>
    'LazyLucideUserRoundPen': LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserRoundPen']>
    'LazyLucideUserRoundPlus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserRoundPlus']>
    'LazyLucideUserRoundSearch': LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserRoundSearch']>
    'LazyLucideUserRoundX': LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserRoundX']>
    'LazyLucideUserSearch': LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserSearch']>
    'LazyLucideUserSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserSquare']>
    'LazyLucideUserSquare2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserSquare2']>
    'LazyLucideUserX': LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserX']>
    'LazyLucideUserX2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserX2']>
    'LazyLucideUsers': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Users']>
    'LazyLucideUsers2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Users2']>
    'LazyLucideUsersRound': LazyComponent<typeof import("../node_modules/lucide-vue-next")['UsersRound']>
    'LazyLucideUtensils': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Utensils']>
    'LazyLucideUtensilsCrossed': LazyComponent<typeof import("../node_modules/lucide-vue-next")['UtensilsCrossed']>
    'LazyLucideUtilityPole': LazyComponent<typeof import("../node_modules/lucide-vue-next")['UtilityPole']>
    'LazyLucideVariable': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Variable']>
    'LazyLucideVault': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Vault']>
    'LazyLucideVegan': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Vegan']>
    'LazyLucideVenetianMask': LazyComponent<typeof import("../node_modules/lucide-vue-next")['VenetianMask']>
    'LazyLucideVenus': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Venus']>
    'LazyLucideVenusAndMars': LazyComponent<typeof import("../node_modules/lucide-vue-next")['VenusAndMars']>
    'LazyLucideVerified': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Verified']>
    'LazyLucideVibrate': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Vibrate']>
    'LazyLucideVibrateOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['VibrateOff']>
    'LazyLucideVideo': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Video']>
    'LazyLucideVideoOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['VideoOff']>
    'LazyLucideVideotape': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Videotape']>
    'LazyLucideView': LazyComponent<typeof import("../node_modules/lucide-vue-next")['View']>
    'LazyLucideVoicemail': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Voicemail']>
    'LazyLucideVolleyball': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Volleyball']>
    'LazyLucideVolume': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Volume']>
    'LazyLucideVolume1': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Volume1']>
    'LazyLucideVolume2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Volume2']>
    'LazyLucideVolumeOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['VolumeOff']>
    'LazyLucideVolumeX': LazyComponent<typeof import("../node_modules/lucide-vue-next")['VolumeX']>
    'LazyLucideVote': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Vote']>
    'LazyLucideWallet': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Wallet']>
    'LazyLucideWallet2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Wallet2']>
    'LazyLucideWalletCards': LazyComponent<typeof import("../node_modules/lucide-vue-next")['WalletCards']>
    'LazyLucideWalletMinimal': LazyComponent<typeof import("../node_modules/lucide-vue-next")['WalletMinimal']>
    'LazyLucideWallpaper': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Wallpaper']>
    'LazyLucideWand': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Wand']>
    'LazyLucideWand2': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Wand2']>
    'LazyLucideWandSparkles': LazyComponent<typeof import("../node_modules/lucide-vue-next")['WandSparkles']>
    'LazyLucideWarehouse': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Warehouse']>
    'LazyLucideWashingMachine': LazyComponent<typeof import("../node_modules/lucide-vue-next")['WashingMachine']>
    'LazyLucideWatch': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Watch']>
    'LazyLucideWaves': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Waves']>
    'LazyLucideWavesLadder': LazyComponent<typeof import("../node_modules/lucide-vue-next")['WavesLadder']>
    'LazyLucideWaypoints': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Waypoints']>
    'LazyLucideWebcam': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Webcam']>
    'LazyLucideWebhook': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Webhook']>
    'LazyLucideWebhookOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['WebhookOff']>
    'LazyLucideWeight': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Weight']>
    'LazyLucideWheat': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Wheat']>
    'LazyLucideWheatOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['WheatOff']>
    'LazyLucideWholeWord': LazyComponent<typeof import("../node_modules/lucide-vue-next")['WholeWord']>
    'LazyLucideWifi': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Wifi']>
    'LazyLucideWifiHigh': LazyComponent<typeof import("../node_modules/lucide-vue-next")['WifiHigh']>
    'LazyLucideWifiLow': LazyComponent<typeof import("../node_modules/lucide-vue-next")['WifiLow']>
    'LazyLucideWifiOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['WifiOff']>
    'LazyLucideWifiZero': LazyComponent<typeof import("../node_modules/lucide-vue-next")['WifiZero']>
    'LazyLucideWind': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Wind']>
    'LazyLucideWindArrowDown': LazyComponent<typeof import("../node_modules/lucide-vue-next")['WindArrowDown']>
    'LazyLucideWine': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Wine']>
    'LazyLucideWineOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['WineOff']>
    'LazyLucideWorkflow': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Workflow']>
    'LazyLucideWorm': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Worm']>
    'LazyLucideWrapText': LazyComponent<typeof import("../node_modules/lucide-vue-next")['WrapText']>
    'LazyLucideWrench': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Wrench']>
    'LazyLucideX': LazyComponent<typeof import("../node_modules/lucide-vue-next")['X']>
    'LazyLucideXCircle': LazyComponent<typeof import("../node_modules/lucide-vue-next")['XCircle']>
    'LazyLucideXOctagon': LazyComponent<typeof import("../node_modules/lucide-vue-next")['XOctagon']>
    'LazyLucideXSquare': LazyComponent<typeof import("../node_modules/lucide-vue-next")['XSquare']>
    'LazyLucideYoutube': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Youtube']>
    'LazyLucideZap': LazyComponent<typeof import("../node_modules/lucide-vue-next")['Zap']>
    'LazyLucideZapOff': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ZapOff']>
    'LazyLucideZoomIn': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ZoomIn']>
    'LazyLucideZoomOut': LazyComponent<typeof import("../node_modules/lucide-vue-next")['ZoomOut']>
    'LazyLucideicons': LazyComponent<typeof import("../node_modules/lucide-vue-next")['icons']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const BaseNavigation: typeof import("../components/BaseNavigation.vue")['default']
export const LoginForm: typeof import("../components/LoginForm.vue")['default']
export const LoginNavigation: typeof import("../components/LoginNavigation.vue")['default']
export const MostPopular: typeof import("../components/MostPopular.vue")['default']
export const Recomendation: typeof import("../components/Recomendation.vue")['default']
export const RegistrationForm: typeof import("../components/RegistrationForm.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const NuxtPicture: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const FormControl: typeof import("../components/ui/form/index")['FormControl']
export const FormDescription: typeof import("../components/ui/form/index")['FormDescription']
export const FormItem: typeof import("../components/ui/form/index")['FormItem']
export const FormLabel: typeof import("../components/ui/form/index")['FormLabel']
export const FormMessage: typeof import("../components/ui/form/index")['FormMessage']
export const FORMITEMINJECTIONKEY: typeof import("../components/ui/form/index")['FORM_ITEM_INJECTION_KEY']
export const Form: typeof import("../components/ui/form/index")['Form']
export const FormField: typeof import("../components/ui/form/index")['FormField']
export const FormFieldArray: typeof import("../components/ui/form/index")['FormFieldArray']
export const Button: typeof import("../components/ui/button/index")['Button']
export const Input: typeof import("../components/ui/input/index")['Input']
export const Label: typeof import("../components/ui/label/index")['Label']
export const LucideAArrowDown: typeof import("../node_modules/lucide-vue-next")['AArrowDown']
export const LucideAArrowUp: typeof import("../node_modules/lucide-vue-next")['AArrowUp']
export const LucideALargeSmall: typeof import("../node_modules/lucide-vue-next")['ALargeSmall']
export const LucideAccessibility: typeof import("../node_modules/lucide-vue-next")['Accessibility']
export const LucideActivity: typeof import("../node_modules/lucide-vue-next")['Activity']
export const LucideActivitySquare: typeof import("../node_modules/lucide-vue-next")['ActivitySquare']
export const LucideAirVent: typeof import("../node_modules/lucide-vue-next")['AirVent']
export const LucideAirplay: typeof import("../node_modules/lucide-vue-next")['Airplay']
export const LucideAlarmCheck: typeof import("../node_modules/lucide-vue-next")['AlarmCheck']
export const LucideAlarmClock: typeof import("../node_modules/lucide-vue-next")['AlarmClock']
export const LucideAlarmClockCheck: typeof import("../node_modules/lucide-vue-next")['AlarmClockCheck']
export const LucideAlarmClockMinus: typeof import("../node_modules/lucide-vue-next")['AlarmClockMinus']
export const LucideAlarmClockOff: typeof import("../node_modules/lucide-vue-next")['AlarmClockOff']
export const LucideAlarmClockPlus: typeof import("../node_modules/lucide-vue-next")['AlarmClockPlus']
export const LucideAlarmMinus: typeof import("../node_modules/lucide-vue-next")['AlarmMinus']
export const LucideAlarmPlus: typeof import("../node_modules/lucide-vue-next")['AlarmPlus']
export const LucideAlarmSmoke: typeof import("../node_modules/lucide-vue-next")['AlarmSmoke']
export const LucideAlbum: typeof import("../node_modules/lucide-vue-next")['Album']
export const LucideAlertCircle: typeof import("../node_modules/lucide-vue-next")['AlertCircle']
export const LucideAlertOctagon: typeof import("../node_modules/lucide-vue-next")['AlertOctagon']
export const LucideAlertTriangle: typeof import("../node_modules/lucide-vue-next")['AlertTriangle']
export const LucideAlignCenter: typeof import("../node_modules/lucide-vue-next")['AlignCenter']
export const LucideAlignCenterHorizontal: typeof import("../node_modules/lucide-vue-next")['AlignCenterHorizontal']
export const LucideAlignCenterVertical: typeof import("../node_modules/lucide-vue-next")['AlignCenterVertical']
export const LucideAlignEndHorizontal: typeof import("../node_modules/lucide-vue-next")['AlignEndHorizontal']
export const LucideAlignEndVertical: typeof import("../node_modules/lucide-vue-next")['AlignEndVertical']
export const LucideAlignHorizontalDistributeCenter: typeof import("../node_modules/lucide-vue-next")['AlignHorizontalDistributeCenter']
export const LucideAlignHorizontalDistributeEnd: typeof import("../node_modules/lucide-vue-next")['AlignHorizontalDistributeEnd']
export const LucideAlignHorizontalDistributeStart: typeof import("../node_modules/lucide-vue-next")['AlignHorizontalDistributeStart']
export const LucideAlignHorizontalJustifyCenter: typeof import("../node_modules/lucide-vue-next")['AlignHorizontalJustifyCenter']
export const LucideAlignHorizontalJustifyEnd: typeof import("../node_modules/lucide-vue-next")['AlignHorizontalJustifyEnd']
export const LucideAlignHorizontalJustifyStart: typeof import("../node_modules/lucide-vue-next")['AlignHorizontalJustifyStart']
export const LucideAlignHorizontalSpaceAround: typeof import("../node_modules/lucide-vue-next")['AlignHorizontalSpaceAround']
export const LucideAlignHorizontalSpaceBetween: typeof import("../node_modules/lucide-vue-next")['AlignHorizontalSpaceBetween']
export const LucideAlignJustify: typeof import("../node_modules/lucide-vue-next")['AlignJustify']
export const LucideAlignLeft: typeof import("../node_modules/lucide-vue-next")['AlignLeft']
export const LucideAlignRight: typeof import("../node_modules/lucide-vue-next")['AlignRight']
export const LucideAlignStartHorizontal: typeof import("../node_modules/lucide-vue-next")['AlignStartHorizontal']
export const LucideAlignStartVertical: typeof import("../node_modules/lucide-vue-next")['AlignStartVertical']
export const LucideAlignVerticalDistributeCenter: typeof import("../node_modules/lucide-vue-next")['AlignVerticalDistributeCenter']
export const LucideAlignVerticalDistributeEnd: typeof import("../node_modules/lucide-vue-next")['AlignVerticalDistributeEnd']
export const LucideAlignVerticalDistributeStart: typeof import("../node_modules/lucide-vue-next")['AlignVerticalDistributeStart']
export const LucideAlignVerticalJustifyCenter: typeof import("../node_modules/lucide-vue-next")['AlignVerticalJustifyCenter']
export const LucideAlignVerticalJustifyEnd: typeof import("../node_modules/lucide-vue-next")['AlignVerticalJustifyEnd']
export const LucideAlignVerticalJustifyStart: typeof import("../node_modules/lucide-vue-next")['AlignVerticalJustifyStart']
export const LucideAlignVerticalSpaceAround: typeof import("../node_modules/lucide-vue-next")['AlignVerticalSpaceAround']
export const LucideAlignVerticalSpaceBetween: typeof import("../node_modules/lucide-vue-next")['AlignVerticalSpaceBetween']
export const LucideAmbulance: typeof import("../node_modules/lucide-vue-next")['Ambulance']
export const LucideAmpersand: typeof import("../node_modules/lucide-vue-next")['Ampersand']
export const LucideAmpersands: typeof import("../node_modules/lucide-vue-next")['Ampersands']
export const LucideAmphora: typeof import("../node_modules/lucide-vue-next")['Amphora']
export const LucideAnchor: typeof import("../node_modules/lucide-vue-next")['Anchor']
export const LucideAngry: typeof import("../node_modules/lucide-vue-next")['Angry']
export const LucideAnnoyed: typeof import("../node_modules/lucide-vue-next")['Annoyed']
export const LucideAntenna: typeof import("../node_modules/lucide-vue-next")['Antenna']
export const LucideAnvil: typeof import("../node_modules/lucide-vue-next")['Anvil']
export const LucideAperture: typeof import("../node_modules/lucide-vue-next")['Aperture']
export const LucideAppWindow: typeof import("../node_modules/lucide-vue-next")['AppWindow']
export const LucideAppWindowMac: typeof import("../node_modules/lucide-vue-next")['AppWindowMac']
export const LucideApple: typeof import("../node_modules/lucide-vue-next")['Apple']
export const LucideArchive: typeof import("../node_modules/lucide-vue-next")['Archive']
export const LucideArchiveRestore: typeof import("../node_modules/lucide-vue-next")['ArchiveRestore']
export const LucideArchiveX: typeof import("../node_modules/lucide-vue-next")['ArchiveX']
export const LucideAreaChart: typeof import("../node_modules/lucide-vue-next")['AreaChart']
export const LucideArmchair: typeof import("../node_modules/lucide-vue-next")['Armchair']
export const LucideArrowBigDown: typeof import("../node_modules/lucide-vue-next")['ArrowBigDown']
export const LucideArrowBigDownDash: typeof import("../node_modules/lucide-vue-next")['ArrowBigDownDash']
export const LucideArrowBigLeft: typeof import("../node_modules/lucide-vue-next")['ArrowBigLeft']
export const LucideArrowBigLeftDash: typeof import("../node_modules/lucide-vue-next")['ArrowBigLeftDash']
export const LucideArrowBigRight: typeof import("../node_modules/lucide-vue-next")['ArrowBigRight']
export const LucideArrowBigRightDash: typeof import("../node_modules/lucide-vue-next")['ArrowBigRightDash']
export const LucideArrowBigUp: typeof import("../node_modules/lucide-vue-next")['ArrowBigUp']
export const LucideArrowBigUpDash: typeof import("../node_modules/lucide-vue-next")['ArrowBigUpDash']
export const LucideArrowDown: typeof import("../node_modules/lucide-vue-next")['ArrowDown']
export const LucideArrowDown01: typeof import("../node_modules/lucide-vue-next")['ArrowDown01']
export const LucideArrowDown10: typeof import("../node_modules/lucide-vue-next")['ArrowDown10']
export const LucideArrowDownAz: typeof import("../node_modules/lucide-vue-next")['ArrowDownAz']
export const LucideArrowDownCircle: typeof import("../node_modules/lucide-vue-next")['ArrowDownCircle']
export const LucideArrowDownFromLine: typeof import("../node_modules/lucide-vue-next")['ArrowDownFromLine']
export const LucideArrowDownLeft: typeof import("../node_modules/lucide-vue-next")['ArrowDownLeft']
export const LucideArrowDownLeftFromCircle: typeof import("../node_modules/lucide-vue-next")['ArrowDownLeftFromCircle']
export const LucideArrowDownLeftFromSquare: typeof import("../node_modules/lucide-vue-next")['ArrowDownLeftFromSquare']
export const LucideArrowDownLeftSquare: typeof import("../node_modules/lucide-vue-next")['ArrowDownLeftSquare']
export const LucideArrowDownNarrowWide: typeof import("../node_modules/lucide-vue-next")['ArrowDownNarrowWide']
export const LucideArrowDownRight: typeof import("../node_modules/lucide-vue-next")['ArrowDownRight']
export const LucideArrowDownRightFromCircle: typeof import("../node_modules/lucide-vue-next")['ArrowDownRightFromCircle']
export const LucideArrowDownRightFromSquare: typeof import("../node_modules/lucide-vue-next")['ArrowDownRightFromSquare']
export const LucideArrowDownRightSquare: typeof import("../node_modules/lucide-vue-next")['ArrowDownRightSquare']
export const LucideArrowDownSquare: typeof import("../node_modules/lucide-vue-next")['ArrowDownSquare']
export const LucideArrowDownToDot: typeof import("../node_modules/lucide-vue-next")['ArrowDownToDot']
export const LucideArrowDownToLine: typeof import("../node_modules/lucide-vue-next")['ArrowDownToLine']
export const LucideArrowDownUp: typeof import("../node_modules/lucide-vue-next")['ArrowDownUp']
export const LucideArrowDownWideNarrow: typeof import("../node_modules/lucide-vue-next")['ArrowDownWideNarrow']
export const LucideArrowDownZa: typeof import("../node_modules/lucide-vue-next")['ArrowDownZa']
export const LucideArrowLeft: typeof import("../node_modules/lucide-vue-next")['ArrowLeft']
export const LucideArrowLeftCircle: typeof import("../node_modules/lucide-vue-next")['ArrowLeftCircle']
export const LucideArrowLeftFromLine: typeof import("../node_modules/lucide-vue-next")['ArrowLeftFromLine']
export const LucideArrowLeftRight: typeof import("../node_modules/lucide-vue-next")['ArrowLeftRight']
export const LucideArrowLeftSquare: typeof import("../node_modules/lucide-vue-next")['ArrowLeftSquare']
export const LucideArrowLeftToLine: typeof import("../node_modules/lucide-vue-next")['ArrowLeftToLine']
export const LucideArrowRight: typeof import("../node_modules/lucide-vue-next")['ArrowRight']
export const LucideArrowRightCircle: typeof import("../node_modules/lucide-vue-next")['ArrowRightCircle']
export const LucideArrowRightFromLine: typeof import("../node_modules/lucide-vue-next")['ArrowRightFromLine']
export const LucideArrowRightLeft: typeof import("../node_modules/lucide-vue-next")['ArrowRightLeft']
export const LucideArrowRightSquare: typeof import("../node_modules/lucide-vue-next")['ArrowRightSquare']
export const LucideArrowRightToLine: typeof import("../node_modules/lucide-vue-next")['ArrowRightToLine']
export const LucideArrowUp: typeof import("../node_modules/lucide-vue-next")['ArrowUp']
export const LucideArrowUp01: typeof import("../node_modules/lucide-vue-next")['ArrowUp01']
export const LucideArrowUp10: typeof import("../node_modules/lucide-vue-next")['ArrowUp10']
export const LucideArrowUpAz: typeof import("../node_modules/lucide-vue-next")['ArrowUpAz']
export const LucideArrowUpCircle: typeof import("../node_modules/lucide-vue-next")['ArrowUpCircle']
export const LucideArrowUpDown: typeof import("../node_modules/lucide-vue-next")['ArrowUpDown']
export const LucideArrowUpFromDot: typeof import("../node_modules/lucide-vue-next")['ArrowUpFromDot']
export const LucideArrowUpFromLine: typeof import("../node_modules/lucide-vue-next")['ArrowUpFromLine']
export const LucideArrowUpLeft: typeof import("../node_modules/lucide-vue-next")['ArrowUpLeft']
export const LucideArrowUpLeftFromCircle: typeof import("../node_modules/lucide-vue-next")['ArrowUpLeftFromCircle']
export const LucideArrowUpLeftFromSquare: typeof import("../node_modules/lucide-vue-next")['ArrowUpLeftFromSquare']
export const LucideArrowUpLeftSquare: typeof import("../node_modules/lucide-vue-next")['ArrowUpLeftSquare']
export const LucideArrowUpNarrowWide: typeof import("../node_modules/lucide-vue-next")['ArrowUpNarrowWide']
export const LucideArrowUpRight: typeof import("../node_modules/lucide-vue-next")['ArrowUpRight']
export const LucideArrowUpRightFromCircle: typeof import("../node_modules/lucide-vue-next")['ArrowUpRightFromCircle']
export const LucideArrowUpRightFromSquare: typeof import("../node_modules/lucide-vue-next")['ArrowUpRightFromSquare']
export const LucideArrowUpRightSquare: typeof import("../node_modules/lucide-vue-next")['ArrowUpRightSquare']
export const LucideArrowUpSquare: typeof import("../node_modules/lucide-vue-next")['ArrowUpSquare']
export const LucideArrowUpToLine: typeof import("../node_modules/lucide-vue-next")['ArrowUpToLine']
export const LucideArrowUpWideNarrow: typeof import("../node_modules/lucide-vue-next")['ArrowUpWideNarrow']
export const LucideArrowUpZa: typeof import("../node_modules/lucide-vue-next")['ArrowUpZa']
export const LucideArrowsUpFromLine: typeof import("../node_modules/lucide-vue-next")['ArrowsUpFromLine']
export const LucideAsterisk: typeof import("../node_modules/lucide-vue-next")['Asterisk']
export const LucideAsteriskSquare: typeof import("../node_modules/lucide-vue-next")['AsteriskSquare']
export const LucideAtSign: typeof import("../node_modules/lucide-vue-next")['AtSign']
export const LucideAtom: typeof import("../node_modules/lucide-vue-next")['Atom']
export const LucideAudioLines: typeof import("../node_modules/lucide-vue-next")['AudioLines']
export const LucideAudioWaveform: typeof import("../node_modules/lucide-vue-next")['AudioWaveform']
export const LucideAward: typeof import("../node_modules/lucide-vue-next")['Award']
export const LucideAxe: typeof import("../node_modules/lucide-vue-next")['Axe']
export const LucideAxis3d: typeof import("../node_modules/lucide-vue-next")['Axis3d']
export const LucideBaby: typeof import("../node_modules/lucide-vue-next")['Baby']
export const LucideBackpack: typeof import("../node_modules/lucide-vue-next")['Backpack']
export const LucideBadge: typeof import("../node_modules/lucide-vue-next")['Badge']
export const LucideBadgeAlert: typeof import("../node_modules/lucide-vue-next")['BadgeAlert']
export const LucideBadgeCent: typeof import("../node_modules/lucide-vue-next")['BadgeCent']
export const LucideBadgeCheck: typeof import("../node_modules/lucide-vue-next")['BadgeCheck']
export const LucideBadgeDollarSign: typeof import("../node_modules/lucide-vue-next")['BadgeDollarSign']
export const LucideBadgeEuro: typeof import("../node_modules/lucide-vue-next")['BadgeEuro']
export const LucideBadgeHelp: typeof import("../node_modules/lucide-vue-next")['BadgeHelp']
export const LucideBadgeIndianRupee: typeof import("../node_modules/lucide-vue-next")['BadgeIndianRupee']
export const LucideBadgeInfo: typeof import("../node_modules/lucide-vue-next")['BadgeInfo']
export const LucideBadgeJapaneseYen: typeof import("../node_modules/lucide-vue-next")['BadgeJapaneseYen']
export const LucideBadgeMinus: typeof import("../node_modules/lucide-vue-next")['BadgeMinus']
export const LucideBadgePercent: typeof import("../node_modules/lucide-vue-next")['BadgePercent']
export const LucideBadgePlus: typeof import("../node_modules/lucide-vue-next")['BadgePlus']
export const LucideBadgePoundSterling: typeof import("../node_modules/lucide-vue-next")['BadgePoundSterling']
export const LucideBadgeRussianRuble: typeof import("../node_modules/lucide-vue-next")['BadgeRussianRuble']
export const LucideBadgeSwissFranc: typeof import("../node_modules/lucide-vue-next")['BadgeSwissFranc']
export const LucideBadgeX: typeof import("../node_modules/lucide-vue-next")['BadgeX']
export const LucideBaggageClaim: typeof import("../node_modules/lucide-vue-next")['BaggageClaim']
export const LucideBan: typeof import("../node_modules/lucide-vue-next")['Ban']
export const LucideBanana: typeof import("../node_modules/lucide-vue-next")['Banana']
export const LucideBandage: typeof import("../node_modules/lucide-vue-next")['Bandage']
export const LucideBanknote: typeof import("../node_modules/lucide-vue-next")['Banknote']
export const LucideBanknoteArrowDown: typeof import("../node_modules/lucide-vue-next")['BanknoteArrowDown']
export const LucideBanknoteArrowUp: typeof import("../node_modules/lucide-vue-next")['BanknoteArrowUp']
export const LucideBanknoteX: typeof import("../node_modules/lucide-vue-next")['BanknoteX']
export const LucideBarChart: typeof import("../node_modules/lucide-vue-next")['BarChart']
export const LucideBarChart2: typeof import("../node_modules/lucide-vue-next")['BarChart2']
export const LucideBarChart3: typeof import("../node_modules/lucide-vue-next")['BarChart3']
export const LucideBarChart4: typeof import("../node_modules/lucide-vue-next")['BarChart4']
export const LucideBarChartBig: typeof import("../node_modules/lucide-vue-next")['BarChartBig']
export const LucideBarChartHorizontal: typeof import("../node_modules/lucide-vue-next")['BarChartHorizontal']
export const LucideBarChartHorizontalBig: typeof import("../node_modules/lucide-vue-next")['BarChartHorizontalBig']
export const LucideBarcode: typeof import("../node_modules/lucide-vue-next")['Barcode']
export const LucideBaseline: typeof import("../node_modules/lucide-vue-next")['Baseline']
export const LucideBath: typeof import("../node_modules/lucide-vue-next")['Bath']
export const LucideBattery: typeof import("../node_modules/lucide-vue-next")['Battery']
export const LucideBatteryCharging: typeof import("../node_modules/lucide-vue-next")['BatteryCharging']
export const LucideBatteryFull: typeof import("../node_modules/lucide-vue-next")['BatteryFull']
export const LucideBatteryLow: typeof import("../node_modules/lucide-vue-next")['BatteryLow']
export const LucideBatteryMedium: typeof import("../node_modules/lucide-vue-next")['BatteryMedium']
export const LucideBatteryPlus: typeof import("../node_modules/lucide-vue-next")['BatteryPlus']
export const LucideBatteryWarning: typeof import("../node_modules/lucide-vue-next")['BatteryWarning']
export const LucideBeaker: typeof import("../node_modules/lucide-vue-next")['Beaker']
export const LucideBean: typeof import("../node_modules/lucide-vue-next")['Bean']
export const LucideBeanOff: typeof import("../node_modules/lucide-vue-next")['BeanOff']
export const LucideBed: typeof import("../node_modules/lucide-vue-next")['Bed']
export const LucideBedDouble: typeof import("../node_modules/lucide-vue-next")['BedDouble']
export const LucideBedSingle: typeof import("../node_modules/lucide-vue-next")['BedSingle']
export const LucideBeef: typeof import("../node_modules/lucide-vue-next")['Beef']
export const LucideBeer: typeof import("../node_modules/lucide-vue-next")['Beer']
export const LucideBeerOff: typeof import("../node_modules/lucide-vue-next")['BeerOff']
export const LucideBell: typeof import("../node_modules/lucide-vue-next")['Bell']
export const LucideBellDot: typeof import("../node_modules/lucide-vue-next")['BellDot']
export const LucideBellElectric: typeof import("../node_modules/lucide-vue-next")['BellElectric']
export const LucideBellMinus: typeof import("../node_modules/lucide-vue-next")['BellMinus']
export const LucideBellOff: typeof import("../node_modules/lucide-vue-next")['BellOff']
export const LucideBellPlus: typeof import("../node_modules/lucide-vue-next")['BellPlus']
export const LucideBellRing: typeof import("../node_modules/lucide-vue-next")['BellRing']
export const LucideBetweenHorizonalEnd: typeof import("../node_modules/lucide-vue-next")['BetweenHorizonalEnd']
export const LucideBetweenHorizonalStart: typeof import("../node_modules/lucide-vue-next")['BetweenHorizonalStart']
export const LucideBetweenHorizontalEnd: typeof import("../node_modules/lucide-vue-next")['BetweenHorizontalEnd']
export const LucideBetweenHorizontalStart: typeof import("../node_modules/lucide-vue-next")['BetweenHorizontalStart']
export const LucideBetweenVerticalEnd: typeof import("../node_modules/lucide-vue-next")['BetweenVerticalEnd']
export const LucideBetweenVerticalStart: typeof import("../node_modules/lucide-vue-next")['BetweenVerticalStart']
export const LucideBicepsFlexed: typeof import("../node_modules/lucide-vue-next")['BicepsFlexed']
export const LucideBike: typeof import("../node_modules/lucide-vue-next")['Bike']
export const LucideBinary: typeof import("../node_modules/lucide-vue-next")['Binary']
export const LucideBinoculars: typeof import("../node_modules/lucide-vue-next")['Binoculars']
export const LucideBiohazard: typeof import("../node_modules/lucide-vue-next")['Biohazard']
export const LucideBird: typeof import("../node_modules/lucide-vue-next")['Bird']
export const LucideBitcoin: typeof import("../node_modules/lucide-vue-next")['Bitcoin']
export const LucideBlend: typeof import("../node_modules/lucide-vue-next")['Blend']
export const LucideBlinds: typeof import("../node_modules/lucide-vue-next")['Blinds']
export const LucideBlocks: typeof import("../node_modules/lucide-vue-next")['Blocks']
export const LucideBluetooth: typeof import("../node_modules/lucide-vue-next")['Bluetooth']
export const LucideBluetoothConnected: typeof import("../node_modules/lucide-vue-next")['BluetoothConnected']
export const LucideBluetoothOff: typeof import("../node_modules/lucide-vue-next")['BluetoothOff']
export const LucideBluetoothSearching: typeof import("../node_modules/lucide-vue-next")['BluetoothSearching']
export const LucideBold: typeof import("../node_modules/lucide-vue-next")['Bold']
export const LucideBolt: typeof import("../node_modules/lucide-vue-next")['Bolt']
export const LucideBomb: typeof import("../node_modules/lucide-vue-next")['Bomb']
export const LucideBone: typeof import("../node_modules/lucide-vue-next")['Bone']
export const LucideBook: typeof import("../node_modules/lucide-vue-next")['Book']
export const LucideBookA: typeof import("../node_modules/lucide-vue-next")['BookA']
export const LucideBookAudio: typeof import("../node_modules/lucide-vue-next")['BookAudio']
export const LucideBookCheck: typeof import("../node_modules/lucide-vue-next")['BookCheck']
export const LucideBookCopy: typeof import("../node_modules/lucide-vue-next")['BookCopy']
export const LucideBookDashed: typeof import("../node_modules/lucide-vue-next")['BookDashed']
export const LucideBookDown: typeof import("../node_modules/lucide-vue-next")['BookDown']
export const LucideBookHeadphones: typeof import("../node_modules/lucide-vue-next")['BookHeadphones']
export const LucideBookHeart: typeof import("../node_modules/lucide-vue-next")['BookHeart']
export const LucideBookImage: typeof import("../node_modules/lucide-vue-next")['BookImage']
export const LucideBookKey: typeof import("../node_modules/lucide-vue-next")['BookKey']
export const LucideBookLock: typeof import("../node_modules/lucide-vue-next")['BookLock']
export const LucideBookMarked: typeof import("../node_modules/lucide-vue-next")['BookMarked']
export const LucideBookMinus: typeof import("../node_modules/lucide-vue-next")['BookMinus']
export const LucideBookOpen: typeof import("../node_modules/lucide-vue-next")['BookOpen']
export const LucideBookOpenCheck: typeof import("../node_modules/lucide-vue-next")['BookOpenCheck']
export const LucideBookOpenText: typeof import("../node_modules/lucide-vue-next")['BookOpenText']
export const LucideBookPlus: typeof import("../node_modules/lucide-vue-next")['BookPlus']
export const LucideBookTemplate: typeof import("../node_modules/lucide-vue-next")['BookTemplate']
export const LucideBookText: typeof import("../node_modules/lucide-vue-next")['BookText']
export const LucideBookType: typeof import("../node_modules/lucide-vue-next")['BookType']
export const LucideBookUp: typeof import("../node_modules/lucide-vue-next")['BookUp']
export const LucideBookUp2: typeof import("../node_modules/lucide-vue-next")['BookUp2']
export const LucideBookUser: typeof import("../node_modules/lucide-vue-next")['BookUser']
export const LucideBookX: typeof import("../node_modules/lucide-vue-next")['BookX']
export const LucideBookmark: typeof import("../node_modules/lucide-vue-next")['Bookmark']
export const LucideBookmarkCheck: typeof import("../node_modules/lucide-vue-next")['BookmarkCheck']
export const LucideBookmarkMinus: typeof import("../node_modules/lucide-vue-next")['BookmarkMinus']
export const LucideBookmarkPlus: typeof import("../node_modules/lucide-vue-next")['BookmarkPlus']
export const LucideBookmarkX: typeof import("../node_modules/lucide-vue-next")['BookmarkX']
export const LucideBoomBox: typeof import("../node_modules/lucide-vue-next")['BoomBox']
export const LucideBot: typeof import("../node_modules/lucide-vue-next")['Bot']
export const LucideBotMessageSquare: typeof import("../node_modules/lucide-vue-next")['BotMessageSquare']
export const LucideBotOff: typeof import("../node_modules/lucide-vue-next")['BotOff']
export const LucideBox: typeof import("../node_modules/lucide-vue-next")['Box']
export const LucideBoxSelect: typeof import("../node_modules/lucide-vue-next")['BoxSelect']
export const LucideBoxes: typeof import("../node_modules/lucide-vue-next")['Boxes']
export const LucideBraces: typeof import("../node_modules/lucide-vue-next")['Braces']
export const LucideBrackets: typeof import("../node_modules/lucide-vue-next")['Brackets']
export const LucideBrain: typeof import("../node_modules/lucide-vue-next")['Brain']
export const LucideBrainCircuit: typeof import("../node_modules/lucide-vue-next")['BrainCircuit']
export const LucideBrainCog: typeof import("../node_modules/lucide-vue-next")['BrainCog']
export const LucideBrickWall: typeof import("../node_modules/lucide-vue-next")['BrickWall']
export const LucideBriefcase: typeof import("../node_modules/lucide-vue-next")['Briefcase']
export const LucideBriefcaseBusiness: typeof import("../node_modules/lucide-vue-next")['BriefcaseBusiness']
export const LucideBriefcaseConveyorBelt: typeof import("../node_modules/lucide-vue-next")['BriefcaseConveyorBelt']
export const LucideBriefcaseMedical: typeof import("../node_modules/lucide-vue-next")['BriefcaseMedical']
export const LucideBringToFront: typeof import("../node_modules/lucide-vue-next")['BringToFront']
export const LucideBrush: typeof import("../node_modules/lucide-vue-next")['Brush']
export const LucideBug: typeof import("../node_modules/lucide-vue-next")['Bug']
export const LucideBugOff: typeof import("../node_modules/lucide-vue-next")['BugOff']
export const LucideBugPlay: typeof import("../node_modules/lucide-vue-next")['BugPlay']
export const LucideBuilding: typeof import("../node_modules/lucide-vue-next")['Building']
export const LucideBuilding2: typeof import("../node_modules/lucide-vue-next")['Building2']
export const LucideBus: typeof import("../node_modules/lucide-vue-next")['Bus']
export const LucideBusFront: typeof import("../node_modules/lucide-vue-next")['BusFront']
export const LucideCable: typeof import("../node_modules/lucide-vue-next")['Cable']
export const LucideCableCar: typeof import("../node_modules/lucide-vue-next")['CableCar']
export const LucideCake: typeof import("../node_modules/lucide-vue-next")['Cake']
export const LucideCakeSlice: typeof import("../node_modules/lucide-vue-next")['CakeSlice']
export const LucideCalculator: typeof import("../node_modules/lucide-vue-next")['Calculator']
export const LucideCalendar: typeof import("../node_modules/lucide-vue-next")['Calendar']
export const LucideCalendar1: typeof import("../node_modules/lucide-vue-next")['Calendar1']
export const LucideCalendarArrowDown: typeof import("../node_modules/lucide-vue-next")['CalendarArrowDown']
export const LucideCalendarArrowUp: typeof import("../node_modules/lucide-vue-next")['CalendarArrowUp']
export const LucideCalendarCheck: typeof import("../node_modules/lucide-vue-next")['CalendarCheck']
export const LucideCalendarCheck2: typeof import("../node_modules/lucide-vue-next")['CalendarCheck2']
export const LucideCalendarClock: typeof import("../node_modules/lucide-vue-next")['CalendarClock']
export const LucideCalendarCog: typeof import("../node_modules/lucide-vue-next")['CalendarCog']
export const LucideCalendarDays: typeof import("../node_modules/lucide-vue-next")['CalendarDays']
export const LucideCalendarFold: typeof import("../node_modules/lucide-vue-next")['CalendarFold']
export const LucideCalendarHeart: typeof import("../node_modules/lucide-vue-next")['CalendarHeart']
export const LucideCalendarMinus: typeof import("../node_modules/lucide-vue-next")['CalendarMinus']
export const LucideCalendarMinus2: typeof import("../node_modules/lucide-vue-next")['CalendarMinus2']
export const LucideCalendarOff: typeof import("../node_modules/lucide-vue-next")['CalendarOff']
export const LucideCalendarPlus: typeof import("../node_modules/lucide-vue-next")['CalendarPlus']
export const LucideCalendarPlus2: typeof import("../node_modules/lucide-vue-next")['CalendarPlus2']
export const LucideCalendarRange: typeof import("../node_modules/lucide-vue-next")['CalendarRange']
export const LucideCalendarSearch: typeof import("../node_modules/lucide-vue-next")['CalendarSearch']
export const LucideCalendarSync: typeof import("../node_modules/lucide-vue-next")['CalendarSync']
export const LucideCalendarX: typeof import("../node_modules/lucide-vue-next")['CalendarX']
export const LucideCalendarX2: typeof import("../node_modules/lucide-vue-next")['CalendarX2']
export const LucideCamera: typeof import("../node_modules/lucide-vue-next")['Camera']
export const LucideCameraOff: typeof import("../node_modules/lucide-vue-next")['CameraOff']
export const LucideCandlestickChart: typeof import("../node_modules/lucide-vue-next")['CandlestickChart']
export const LucideCandy: typeof import("../node_modules/lucide-vue-next")['Candy']
export const LucideCandyCane: typeof import("../node_modules/lucide-vue-next")['CandyCane']
export const LucideCandyOff: typeof import("../node_modules/lucide-vue-next")['CandyOff']
export const LucideCannabis: typeof import("../node_modules/lucide-vue-next")['Cannabis']
export const LucideCaptions: typeof import("../node_modules/lucide-vue-next")['Captions']
export const LucideCaptionsOff: typeof import("../node_modules/lucide-vue-next")['CaptionsOff']
export const LucideCar: typeof import("../node_modules/lucide-vue-next")['Car']
export const LucideCarFront: typeof import("../node_modules/lucide-vue-next")['CarFront']
export const LucideCarTaxiFront: typeof import("../node_modules/lucide-vue-next")['CarTaxiFront']
export const LucideCaravan: typeof import("../node_modules/lucide-vue-next")['Caravan']
export const LucideCarrot: typeof import("../node_modules/lucide-vue-next")['Carrot']
export const LucideCaseLower: typeof import("../node_modules/lucide-vue-next")['CaseLower']
export const LucideCaseSensitive: typeof import("../node_modules/lucide-vue-next")['CaseSensitive']
export const LucideCaseUpper: typeof import("../node_modules/lucide-vue-next")['CaseUpper']
export const LucideCassetteTape: typeof import("../node_modules/lucide-vue-next")['CassetteTape']
export const LucideCast: typeof import("../node_modules/lucide-vue-next")['Cast']
export const LucideCastle: typeof import("../node_modules/lucide-vue-next")['Castle']
export const LucideCat: typeof import("../node_modules/lucide-vue-next")['Cat']
export const LucideCctv: typeof import("../node_modules/lucide-vue-next")['Cctv']
export const LucideChartArea: typeof import("../node_modules/lucide-vue-next")['ChartArea']
export const LucideChartBar: typeof import("../node_modules/lucide-vue-next")['ChartBar']
export const LucideChartBarBig: typeof import("../node_modules/lucide-vue-next")['ChartBarBig']
export const LucideChartBarDecreasing: typeof import("../node_modules/lucide-vue-next")['ChartBarDecreasing']
export const LucideChartBarIncreasing: typeof import("../node_modules/lucide-vue-next")['ChartBarIncreasing']
export const LucideChartBarStacked: typeof import("../node_modules/lucide-vue-next")['ChartBarStacked']
export const LucideChartCandlestick: typeof import("../node_modules/lucide-vue-next")['ChartCandlestick']
export const LucideChartColumn: typeof import("../node_modules/lucide-vue-next")['ChartColumn']
export const LucideChartColumnBig: typeof import("../node_modules/lucide-vue-next")['ChartColumnBig']
export const LucideChartColumnDecreasing: typeof import("../node_modules/lucide-vue-next")['ChartColumnDecreasing']
export const LucideChartColumnIncreasing: typeof import("../node_modules/lucide-vue-next")['ChartColumnIncreasing']
export const LucideChartColumnStacked: typeof import("../node_modules/lucide-vue-next")['ChartColumnStacked']
export const LucideChartGantt: typeof import("../node_modules/lucide-vue-next")['ChartGantt']
export const LucideChartLine: typeof import("../node_modules/lucide-vue-next")['ChartLine']
export const LucideChartNetwork: typeof import("../node_modules/lucide-vue-next")['ChartNetwork']
export const LucideChartNoAxesColumn: typeof import("../node_modules/lucide-vue-next")['ChartNoAxesColumn']
export const LucideChartNoAxesColumnDecreasing: typeof import("../node_modules/lucide-vue-next")['ChartNoAxesColumnDecreasing']
export const LucideChartNoAxesColumnIncreasing: typeof import("../node_modules/lucide-vue-next")['ChartNoAxesColumnIncreasing']
export const LucideChartNoAxesCombined: typeof import("../node_modules/lucide-vue-next")['ChartNoAxesCombined']
export const LucideChartNoAxesGantt: typeof import("../node_modules/lucide-vue-next")['ChartNoAxesGantt']
export const LucideChartPie: typeof import("../node_modules/lucide-vue-next")['ChartPie']
export const LucideChartScatter: typeof import("../node_modules/lucide-vue-next")['ChartScatter']
export const LucideChartSpline: typeof import("../node_modules/lucide-vue-next")['ChartSpline']
export const LucideCheck: typeof import("../node_modules/lucide-vue-next")['Check']
export const LucideCheckCheck: typeof import("../node_modules/lucide-vue-next")['CheckCheck']
export const LucideCheckCircle: typeof import("../node_modules/lucide-vue-next")['CheckCircle']
export const LucideCheckCircle2: typeof import("../node_modules/lucide-vue-next")['CheckCircle2']
export const LucideCheckSquare: typeof import("../node_modules/lucide-vue-next")['CheckSquare']
export const LucideCheckSquare2: typeof import("../node_modules/lucide-vue-next")['CheckSquare2']
export const LucideChefHat: typeof import("../node_modules/lucide-vue-next")['ChefHat']
export const LucideCherry: typeof import("../node_modules/lucide-vue-next")['Cherry']
export const LucideChevronDown: typeof import("../node_modules/lucide-vue-next")['ChevronDown']
export const LucideChevronDownCircle: typeof import("../node_modules/lucide-vue-next")['ChevronDownCircle']
export const LucideChevronDownSquare: typeof import("../node_modules/lucide-vue-next")['ChevronDownSquare']
export const LucideChevronFirst: typeof import("../node_modules/lucide-vue-next")['ChevronFirst']
export const LucideChevronLast: typeof import("../node_modules/lucide-vue-next")['ChevronLast']
export const LucideChevronLeft: typeof import("../node_modules/lucide-vue-next")['ChevronLeft']
export const LucideChevronLeftCircle: typeof import("../node_modules/lucide-vue-next")['ChevronLeftCircle']
export const LucideChevronLeftSquare: typeof import("../node_modules/lucide-vue-next")['ChevronLeftSquare']
export const LucideChevronRight: typeof import("../node_modules/lucide-vue-next")['ChevronRight']
export const LucideChevronRightCircle: typeof import("../node_modules/lucide-vue-next")['ChevronRightCircle']
export const LucideChevronRightSquare: typeof import("../node_modules/lucide-vue-next")['ChevronRightSquare']
export const LucideChevronUp: typeof import("../node_modules/lucide-vue-next")['ChevronUp']
export const LucideChevronUpCircle: typeof import("../node_modules/lucide-vue-next")['ChevronUpCircle']
export const LucideChevronUpSquare: typeof import("../node_modules/lucide-vue-next")['ChevronUpSquare']
export const LucideChevronsDown: typeof import("../node_modules/lucide-vue-next")['ChevronsDown']
export const LucideChevronsDownUp: typeof import("../node_modules/lucide-vue-next")['ChevronsDownUp']
export const LucideChevronsLeft: typeof import("../node_modules/lucide-vue-next")['ChevronsLeft']
export const LucideChevronsLeftRight: typeof import("../node_modules/lucide-vue-next")['ChevronsLeftRight']
export const LucideChevronsLeftRightEllipsis: typeof import("../node_modules/lucide-vue-next")['ChevronsLeftRightEllipsis']
export const LucideChevronsRight: typeof import("../node_modules/lucide-vue-next")['ChevronsRight']
export const LucideChevronsRightLeft: typeof import("../node_modules/lucide-vue-next")['ChevronsRightLeft']
export const LucideChevronsUp: typeof import("../node_modules/lucide-vue-next")['ChevronsUp']
export const LucideChevronsUpDown: typeof import("../node_modules/lucide-vue-next")['ChevronsUpDown']
export const LucideChrome: typeof import("../node_modules/lucide-vue-next")['Chrome']
export const LucideChurch: typeof import("../node_modules/lucide-vue-next")['Church']
export const LucideCigarette: typeof import("../node_modules/lucide-vue-next")['Cigarette']
export const LucideCigaretteOff: typeof import("../node_modules/lucide-vue-next")['CigaretteOff']
export const LucideCircle: typeof import("../node_modules/lucide-vue-next")['Circle']
export const LucideCircleAlert: typeof import("../node_modules/lucide-vue-next")['CircleAlert']
export const LucideCircleArrowDown: typeof import("../node_modules/lucide-vue-next")['CircleArrowDown']
export const LucideCircleArrowLeft: typeof import("../node_modules/lucide-vue-next")['CircleArrowLeft']
export const LucideCircleArrowOutDownLeft: typeof import("../node_modules/lucide-vue-next")['CircleArrowOutDownLeft']
export const LucideCircleArrowOutDownRight: typeof import("../node_modules/lucide-vue-next")['CircleArrowOutDownRight']
export const LucideCircleArrowOutUpLeft: typeof import("../node_modules/lucide-vue-next")['CircleArrowOutUpLeft']
export const LucideCircleArrowOutUpRight: typeof import("../node_modules/lucide-vue-next")['CircleArrowOutUpRight']
export const LucideCircleArrowRight: typeof import("../node_modules/lucide-vue-next")['CircleArrowRight']
export const LucideCircleArrowUp: typeof import("../node_modules/lucide-vue-next")['CircleArrowUp']
export const LucideCircleCheck: typeof import("../node_modules/lucide-vue-next")['CircleCheck']
export const LucideCircleCheckBig: typeof import("../node_modules/lucide-vue-next")['CircleCheckBig']
export const LucideCircleChevronDown: typeof import("../node_modules/lucide-vue-next")['CircleChevronDown']
export const LucideCircleChevronLeft: typeof import("../node_modules/lucide-vue-next")['CircleChevronLeft']
export const LucideCircleChevronRight: typeof import("../node_modules/lucide-vue-next")['CircleChevronRight']
export const LucideCircleChevronUp: typeof import("../node_modules/lucide-vue-next")['CircleChevronUp']
export const LucideCircleDashed: typeof import("../node_modules/lucide-vue-next")['CircleDashed']
export const LucideCircleDivide: typeof import("../node_modules/lucide-vue-next")['CircleDivide']
export const LucideCircleDollarSign: typeof import("../node_modules/lucide-vue-next")['CircleDollarSign']
export const LucideCircleDot: typeof import("../node_modules/lucide-vue-next")['CircleDot']
export const LucideCircleDotDashed: typeof import("../node_modules/lucide-vue-next")['CircleDotDashed']
export const LucideCircleEllipsis: typeof import("../node_modules/lucide-vue-next")['CircleEllipsis']
export const LucideCircleEqual: typeof import("../node_modules/lucide-vue-next")['CircleEqual']
export const LucideCircleFadingArrowUp: typeof import("../node_modules/lucide-vue-next")['CircleFadingArrowUp']
export const LucideCircleFadingPlus: typeof import("../node_modules/lucide-vue-next")['CircleFadingPlus']
export const LucideCircleGauge: typeof import("../node_modules/lucide-vue-next")['CircleGauge']
export const LucideCircleHelp: typeof import("../node_modules/lucide-vue-next")['CircleHelp']
export const LucideCircleMinus: typeof import("../node_modules/lucide-vue-next")['CircleMinus']
export const LucideCircleOff: typeof import("../node_modules/lucide-vue-next")['CircleOff']
export const LucideCircleParking: typeof import("../node_modules/lucide-vue-next")['CircleParking']
export const LucideCircleParkingOff: typeof import("../node_modules/lucide-vue-next")['CircleParkingOff']
export const LucideCirclePause: typeof import("../node_modules/lucide-vue-next")['CirclePause']
export const LucideCirclePercent: typeof import("../node_modules/lucide-vue-next")['CirclePercent']
export const LucideCirclePlay: typeof import("../node_modules/lucide-vue-next")['CirclePlay']
export const LucideCirclePlus: typeof import("../node_modules/lucide-vue-next")['CirclePlus']
export const LucideCirclePower: typeof import("../node_modules/lucide-vue-next")['CirclePower']
export const LucideCircleSlash: typeof import("../node_modules/lucide-vue-next")['CircleSlash']
export const LucideCircleSlash2: typeof import("../node_modules/lucide-vue-next")['CircleSlash2']
export const LucideCircleSlashed: typeof import("../node_modules/lucide-vue-next")['CircleSlashed']
export const LucideCircleSmall: typeof import("../node_modules/lucide-vue-next")['CircleSmall']
export const LucideCircleStop: typeof import("../node_modules/lucide-vue-next")['CircleStop']
export const LucideCircleUser: typeof import("../node_modules/lucide-vue-next")['CircleUser']
export const LucideCircleUserRound: typeof import("../node_modules/lucide-vue-next")['CircleUserRound']
export const LucideCircleX: typeof import("../node_modules/lucide-vue-next")['CircleX']
export const LucideCircuitBoard: typeof import("../node_modules/lucide-vue-next")['CircuitBoard']
export const LucideCitrus: typeof import("../node_modules/lucide-vue-next")['Citrus']
export const LucideClapperboard: typeof import("../node_modules/lucide-vue-next")['Clapperboard']
export const LucideClipboard: typeof import("../node_modules/lucide-vue-next")['Clipboard']
export const LucideClipboardCheck: typeof import("../node_modules/lucide-vue-next")['ClipboardCheck']
export const LucideClipboardCopy: typeof import("../node_modules/lucide-vue-next")['ClipboardCopy']
export const LucideClipboardEdit: typeof import("../node_modules/lucide-vue-next")['ClipboardEdit']
export const LucideClipboardList: typeof import("../node_modules/lucide-vue-next")['ClipboardList']
export const LucideClipboardMinus: typeof import("../node_modules/lucide-vue-next")['ClipboardMinus']
export const LucideClipboardPaste: typeof import("../node_modules/lucide-vue-next")['ClipboardPaste']
export const LucideClipboardPen: typeof import("../node_modules/lucide-vue-next")['ClipboardPen']
export const LucideClipboardPenLine: typeof import("../node_modules/lucide-vue-next")['ClipboardPenLine']
export const LucideClipboardPlus: typeof import("../node_modules/lucide-vue-next")['ClipboardPlus']
export const LucideClipboardSignature: typeof import("../node_modules/lucide-vue-next")['ClipboardSignature']
export const LucideClipboardType: typeof import("../node_modules/lucide-vue-next")['ClipboardType']
export const LucideClipboardX: typeof import("../node_modules/lucide-vue-next")['ClipboardX']
export const LucideClock: typeof import("../node_modules/lucide-vue-next")['Clock']
export const LucideClock1: typeof import("../node_modules/lucide-vue-next")['Clock1']
export const LucideClock10: typeof import("../node_modules/lucide-vue-next")['Clock10']
export const LucideClock11: typeof import("../node_modules/lucide-vue-next")['Clock11']
export const LucideClock12: typeof import("../node_modules/lucide-vue-next")['Clock12']
export const LucideClock2: typeof import("../node_modules/lucide-vue-next")['Clock2']
export const LucideClock3: typeof import("../node_modules/lucide-vue-next")['Clock3']
export const LucideClock4: typeof import("../node_modules/lucide-vue-next")['Clock4']
export const LucideClock5: typeof import("../node_modules/lucide-vue-next")['Clock5']
export const LucideClock6: typeof import("../node_modules/lucide-vue-next")['Clock6']
export const LucideClock7: typeof import("../node_modules/lucide-vue-next")['Clock7']
export const LucideClock8: typeof import("../node_modules/lucide-vue-next")['Clock8']
export const LucideClock9: typeof import("../node_modules/lucide-vue-next")['Clock9']
export const LucideClockAlert: typeof import("../node_modules/lucide-vue-next")['ClockAlert']
export const LucideClockArrowDown: typeof import("../node_modules/lucide-vue-next")['ClockArrowDown']
export const LucideClockArrowUp: typeof import("../node_modules/lucide-vue-next")['ClockArrowUp']
export const LucideClockFading: typeof import("../node_modules/lucide-vue-next")['ClockFading']
export const LucideCloud: typeof import("../node_modules/lucide-vue-next")['Cloud']
export const LucideCloudAlert: typeof import("../node_modules/lucide-vue-next")['CloudAlert']
export const LucideCloudCog: typeof import("../node_modules/lucide-vue-next")['CloudCog']
export const LucideCloudDownload: typeof import("../node_modules/lucide-vue-next")['CloudDownload']
export const LucideCloudDrizzle: typeof import("../node_modules/lucide-vue-next")['CloudDrizzle']
export const LucideCloudFog: typeof import("../node_modules/lucide-vue-next")['CloudFog']
export const LucideCloudHail: typeof import("../node_modules/lucide-vue-next")['CloudHail']
export const LucideCloudLightning: typeof import("../node_modules/lucide-vue-next")['CloudLightning']
export const LucideCloudMoon: typeof import("../node_modules/lucide-vue-next")['CloudMoon']
export const LucideCloudMoonRain: typeof import("../node_modules/lucide-vue-next")['CloudMoonRain']
export const LucideCloudOff: typeof import("../node_modules/lucide-vue-next")['CloudOff']
export const LucideCloudRain: typeof import("../node_modules/lucide-vue-next")['CloudRain']
export const LucideCloudRainWind: typeof import("../node_modules/lucide-vue-next")['CloudRainWind']
export const LucideCloudSnow: typeof import("../node_modules/lucide-vue-next")['CloudSnow']
export const LucideCloudSun: typeof import("../node_modules/lucide-vue-next")['CloudSun']
export const LucideCloudSunRain: typeof import("../node_modules/lucide-vue-next")['CloudSunRain']
export const LucideCloudUpload: typeof import("../node_modules/lucide-vue-next")['CloudUpload']
export const LucideCloudy: typeof import("../node_modules/lucide-vue-next")['Cloudy']
export const LucideClover: typeof import("../node_modules/lucide-vue-next")['Clover']
export const LucideClub: typeof import("../node_modules/lucide-vue-next")['Club']
export const LucideCode: typeof import("../node_modules/lucide-vue-next")['Code']
export const LucideCode2: typeof import("../node_modules/lucide-vue-next")['Code2']
export const LucideCodeSquare: typeof import("../node_modules/lucide-vue-next")['CodeSquare']
export const LucideCodeXml: typeof import("../node_modules/lucide-vue-next")['CodeXml']
export const LucideCodepen: typeof import("../node_modules/lucide-vue-next")['Codepen']
export const LucideCodesandbox: typeof import("../node_modules/lucide-vue-next")['Codesandbox']
export const LucideCoffee: typeof import("../node_modules/lucide-vue-next")['Coffee']
export const LucideCog: typeof import("../node_modules/lucide-vue-next")['Cog']
export const LucideCoins: typeof import("../node_modules/lucide-vue-next")['Coins']
export const LucideColumns: typeof import("../node_modules/lucide-vue-next")['Columns']
export const LucideColumns2: typeof import("../node_modules/lucide-vue-next")['Columns2']
export const LucideColumns3: typeof import("../node_modules/lucide-vue-next")['Columns3']
export const LucideColumns4: typeof import("../node_modules/lucide-vue-next")['Columns4']
export const LucideCombine: typeof import("../node_modules/lucide-vue-next")['Combine']
export const LucideCommand: typeof import("../node_modules/lucide-vue-next")['Command']
export const LucideCompass: typeof import("../node_modules/lucide-vue-next")['Compass']
export const LucideComponent: typeof import("../node_modules/lucide-vue-next")['Component']
export const LucideComputer: typeof import("../node_modules/lucide-vue-next")['Computer']
export const LucideConciergeBell: typeof import("../node_modules/lucide-vue-next")['ConciergeBell']
export const LucideCone: typeof import("../node_modules/lucide-vue-next")['Cone']
export const LucideConstruction: typeof import("../node_modules/lucide-vue-next")['Construction']
export const LucideContact: typeof import("../node_modules/lucide-vue-next")['Contact']
export const LucideContact2: typeof import("../node_modules/lucide-vue-next")['Contact2']
export const LucideContactRound: typeof import("../node_modules/lucide-vue-next")['ContactRound']
export const LucideContainer: typeof import("../node_modules/lucide-vue-next")['Container']
export const LucideContrast: typeof import("../node_modules/lucide-vue-next")['Contrast']
export const LucideCookie: typeof import("../node_modules/lucide-vue-next")['Cookie']
export const LucideCookingPot: typeof import("../node_modules/lucide-vue-next")['CookingPot']
export const LucideCopy: typeof import("../node_modules/lucide-vue-next")['Copy']
export const LucideCopyCheck: typeof import("../node_modules/lucide-vue-next")['CopyCheck']
export const LucideCopyMinus: typeof import("../node_modules/lucide-vue-next")['CopyMinus']
export const LucideCopyPlus: typeof import("../node_modules/lucide-vue-next")['CopyPlus']
export const LucideCopySlash: typeof import("../node_modules/lucide-vue-next")['CopySlash']
export const LucideCopyX: typeof import("../node_modules/lucide-vue-next")['CopyX']
export const LucideCopyleft: typeof import("../node_modules/lucide-vue-next")['Copyleft']
export const LucideCopyright: typeof import("../node_modules/lucide-vue-next")['Copyright']
export const LucideCornerDownLeft: typeof import("../node_modules/lucide-vue-next")['CornerDownLeft']
export const LucideCornerDownRight: typeof import("../node_modules/lucide-vue-next")['CornerDownRight']
export const LucideCornerLeftDown: typeof import("../node_modules/lucide-vue-next")['CornerLeftDown']
export const LucideCornerLeftUp: typeof import("../node_modules/lucide-vue-next")['CornerLeftUp']
export const LucideCornerRightDown: typeof import("../node_modules/lucide-vue-next")['CornerRightDown']
export const LucideCornerRightUp: typeof import("../node_modules/lucide-vue-next")['CornerRightUp']
export const LucideCornerUpLeft: typeof import("../node_modules/lucide-vue-next")['CornerUpLeft']
export const LucideCornerUpRight: typeof import("../node_modules/lucide-vue-next")['CornerUpRight']
export const LucideCpu: typeof import("../node_modules/lucide-vue-next")['Cpu']
export const LucideCreativeCommons: typeof import("../node_modules/lucide-vue-next")['CreativeCommons']
export const LucideCreditCard: typeof import("../node_modules/lucide-vue-next")['CreditCard']
export const LucideCroissant: typeof import("../node_modules/lucide-vue-next")['Croissant']
export const LucideCrop: typeof import("../node_modules/lucide-vue-next")['Crop']
export const LucideCross: typeof import("../node_modules/lucide-vue-next")['Cross']
export const LucideCrosshair: typeof import("../node_modules/lucide-vue-next")['Crosshair']
export const LucideCrown: typeof import("../node_modules/lucide-vue-next")['Crown']
export const LucideCuboid: typeof import("../node_modules/lucide-vue-next")['Cuboid']
export const LucideCupSoda: typeof import("../node_modules/lucide-vue-next")['CupSoda']
export const LucideCurlyBraces: typeof import("../node_modules/lucide-vue-next")['CurlyBraces']
export const LucideCurrency: typeof import("../node_modules/lucide-vue-next")['Currency']
export const LucideCylinder: typeof import("../node_modules/lucide-vue-next")['Cylinder']
export const LucideDam: typeof import("../node_modules/lucide-vue-next")['Dam']
export const LucideDatabase: typeof import("../node_modules/lucide-vue-next")['Database']
export const LucideDatabaseBackup: typeof import("../node_modules/lucide-vue-next")['DatabaseBackup']
export const LucideDatabaseZap: typeof import("../node_modules/lucide-vue-next")['DatabaseZap']
export const LucideDelete: typeof import("../node_modules/lucide-vue-next")['Delete']
export const LucideDessert: typeof import("../node_modules/lucide-vue-next")['Dessert']
export const LucideDiameter: typeof import("../node_modules/lucide-vue-next")['Diameter']
export const LucideDiamond: typeof import("../node_modules/lucide-vue-next")['Diamond']
export const LucideDiamondMinus: typeof import("../node_modules/lucide-vue-next")['DiamondMinus']
export const LucideDiamondPercent: typeof import("../node_modules/lucide-vue-next")['DiamondPercent']
export const LucideDiamondPlus: typeof import("../node_modules/lucide-vue-next")['DiamondPlus']
export const LucideDice1: typeof import("../node_modules/lucide-vue-next")['Dice1']
export const LucideDice2: typeof import("../node_modules/lucide-vue-next")['Dice2']
export const LucideDice3: typeof import("../node_modules/lucide-vue-next")['Dice3']
export const LucideDice4: typeof import("../node_modules/lucide-vue-next")['Dice4']
export const LucideDice5: typeof import("../node_modules/lucide-vue-next")['Dice5']
export const LucideDice6: typeof import("../node_modules/lucide-vue-next")['Dice6']
export const LucideDices: typeof import("../node_modules/lucide-vue-next")['Dices']
export const LucideDiff: typeof import("../node_modules/lucide-vue-next")['Diff']
export const LucideDisc: typeof import("../node_modules/lucide-vue-next")['Disc']
export const LucideDisc2: typeof import("../node_modules/lucide-vue-next")['Disc2']
export const LucideDisc3: typeof import("../node_modules/lucide-vue-next")['Disc3']
export const LucideDiscAlbum: typeof import("../node_modules/lucide-vue-next")['DiscAlbum']
export const LucideDivide: typeof import("../node_modules/lucide-vue-next")['Divide']
export const LucideDivideCircle: typeof import("../node_modules/lucide-vue-next")['DivideCircle']
export const LucideDivideSquare: typeof import("../node_modules/lucide-vue-next")['DivideSquare']
export const LucideDna: typeof import("../node_modules/lucide-vue-next")['Dna']
export const LucideDnaOff: typeof import("../node_modules/lucide-vue-next")['DnaOff']
export const LucideDock: typeof import("../node_modules/lucide-vue-next")['Dock']
export const LucideDog: typeof import("../node_modules/lucide-vue-next")['Dog']
export const LucideDollarSign: typeof import("../node_modules/lucide-vue-next")['DollarSign']
export const LucideDonut: typeof import("../node_modules/lucide-vue-next")['Donut']
export const LucideDoorClosed: typeof import("../node_modules/lucide-vue-next")['DoorClosed']
export const LucideDoorOpen: typeof import("../node_modules/lucide-vue-next")['DoorOpen']
export const LucideDot: typeof import("../node_modules/lucide-vue-next")['Dot']
export const LucideDotSquare: typeof import("../node_modules/lucide-vue-next")['DotSquare']
export const LucideDownload: typeof import("../node_modules/lucide-vue-next")['Download']
export const LucideDownloadCloud: typeof import("../node_modules/lucide-vue-next")['DownloadCloud']
export const LucideDraftingCompass: typeof import("../node_modules/lucide-vue-next")['DraftingCompass']
export const LucideDrama: typeof import("../node_modules/lucide-vue-next")['Drama']
export const LucideDribbble: typeof import("../node_modules/lucide-vue-next")['Dribbble']
export const LucideDrill: typeof import("../node_modules/lucide-vue-next")['Drill']
export const LucideDroplet: typeof import("../node_modules/lucide-vue-next")['Droplet']
export const LucideDropletOff: typeof import("../node_modules/lucide-vue-next")['DropletOff']
export const LucideDroplets: typeof import("../node_modules/lucide-vue-next")['Droplets']
export const LucideDrum: typeof import("../node_modules/lucide-vue-next")['Drum']
export const LucideDrumstick: typeof import("../node_modules/lucide-vue-next")['Drumstick']
export const LucideDumbbell: typeof import("../node_modules/lucide-vue-next")['Dumbbell']
export const LucideEar: typeof import("../node_modules/lucide-vue-next")['Ear']
export const LucideEarOff: typeof import("../node_modules/lucide-vue-next")['EarOff']
export const LucideEarth: typeof import("../node_modules/lucide-vue-next")['Earth']
export const LucideEarthLock: typeof import("../node_modules/lucide-vue-next")['EarthLock']
export const LucideEclipse: typeof import("../node_modules/lucide-vue-next")['Eclipse']
export const LucideEdit: typeof import("../node_modules/lucide-vue-next")['Edit']
export const LucideEdit2: typeof import("../node_modules/lucide-vue-next")['Edit2']
export const LucideEdit3: typeof import("../node_modules/lucide-vue-next")['Edit3']
export const LucideEgg: typeof import("../node_modules/lucide-vue-next")['Egg']
export const LucideEggFried: typeof import("../node_modules/lucide-vue-next")['EggFried']
export const LucideEggOff: typeof import("../node_modules/lucide-vue-next")['EggOff']
export const LucideEllipsis: typeof import("../node_modules/lucide-vue-next")['Ellipsis']
export const LucideEllipsisVertical: typeof import("../node_modules/lucide-vue-next")['EllipsisVertical']
export const LucideEqual: typeof import("../node_modules/lucide-vue-next")['Equal']
export const LucideEqualApproximately: typeof import("../node_modules/lucide-vue-next")['EqualApproximately']
export const LucideEqualNot: typeof import("../node_modules/lucide-vue-next")['EqualNot']
export const LucideEqualSquare: typeof import("../node_modules/lucide-vue-next")['EqualSquare']
export const LucideEraser: typeof import("../node_modules/lucide-vue-next")['Eraser']
export const LucideEthernetPort: typeof import("../node_modules/lucide-vue-next")['EthernetPort']
export const LucideEuro: typeof import("../node_modules/lucide-vue-next")['Euro']
export const LucideExpand: typeof import("../node_modules/lucide-vue-next")['Expand']
export const LucideExternalLink: typeof import("../node_modules/lucide-vue-next")['ExternalLink']
export const LucideEye: typeof import("../node_modules/lucide-vue-next")['Eye']
export const LucideEyeClosed: typeof import("../node_modules/lucide-vue-next")['EyeClosed']
export const LucideEyeOff: typeof import("../node_modules/lucide-vue-next")['EyeOff']
export const LucideFacebook: typeof import("../node_modules/lucide-vue-next")['Facebook']
export const LucideFactory: typeof import("../node_modules/lucide-vue-next")['Factory']
export const LucideFan: typeof import("../node_modules/lucide-vue-next")['Fan']
export const LucideFastForward: typeof import("../node_modules/lucide-vue-next")['FastForward']
export const LucideFeather: typeof import("../node_modules/lucide-vue-next")['Feather']
export const LucideFence: typeof import("../node_modules/lucide-vue-next")['Fence']
export const LucideFerrisWheel: typeof import("../node_modules/lucide-vue-next")['FerrisWheel']
export const LucideFigma: typeof import("../node_modules/lucide-vue-next")['Figma']
export const LucideFile: typeof import("../node_modules/lucide-vue-next")['File']
export const LucideFileArchive: typeof import("../node_modules/lucide-vue-next")['FileArchive']
export const LucideFileAudio: typeof import("../node_modules/lucide-vue-next")['FileAudio']
export const LucideFileAudio2: typeof import("../node_modules/lucide-vue-next")['FileAudio2']
export const LucideFileAxis3d: typeof import("../node_modules/lucide-vue-next")['FileAxis3d']
export const LucideFileBadge: typeof import("../node_modules/lucide-vue-next")['FileBadge']
export const LucideFileBadge2: typeof import("../node_modules/lucide-vue-next")['FileBadge2']
export const LucideFileBarChart: typeof import("../node_modules/lucide-vue-next")['FileBarChart']
export const LucideFileBarChart2: typeof import("../node_modules/lucide-vue-next")['FileBarChart2']
export const LucideFileBox: typeof import("../node_modules/lucide-vue-next")['FileBox']
export const LucideFileChartColumn: typeof import("../node_modules/lucide-vue-next")['FileChartColumn']
export const LucideFileChartColumnIncreasing: typeof import("../node_modules/lucide-vue-next")['FileChartColumnIncreasing']
export const LucideFileChartLine: typeof import("../node_modules/lucide-vue-next")['FileChartLine']
export const LucideFileChartPie: typeof import("../node_modules/lucide-vue-next")['FileChartPie']
export const LucideFileCheck: typeof import("../node_modules/lucide-vue-next")['FileCheck']
export const LucideFileCheck2: typeof import("../node_modules/lucide-vue-next")['FileCheck2']
export const LucideFileClock: typeof import("../node_modules/lucide-vue-next")['FileClock']
export const LucideFileCode: typeof import("../node_modules/lucide-vue-next")['FileCode']
export const LucideFileCode2: typeof import("../node_modules/lucide-vue-next")['FileCode2']
export const LucideFileCog: typeof import("../node_modules/lucide-vue-next")['FileCog']
export const LucideFileCog2: typeof import("../node_modules/lucide-vue-next")['FileCog2']
export const LucideFileDiff: typeof import("../node_modules/lucide-vue-next")['FileDiff']
export const LucideFileDigit: typeof import("../node_modules/lucide-vue-next")['FileDigit']
export const LucideFileDown: typeof import("../node_modules/lucide-vue-next")['FileDown']
export const LucideFileEdit: typeof import("../node_modules/lucide-vue-next")['FileEdit']
export const LucideFileHeart: typeof import("../node_modules/lucide-vue-next")['FileHeart']
export const LucideFileImage: typeof import("../node_modules/lucide-vue-next")['FileImage']
export const LucideFileInput: typeof import("../node_modules/lucide-vue-next")['FileInput']
export const LucideFileJson: typeof import("../node_modules/lucide-vue-next")['FileJson']
export const LucideFileJson2: typeof import("../node_modules/lucide-vue-next")['FileJson2']
export const LucideFileKey: typeof import("../node_modules/lucide-vue-next")['FileKey']
export const LucideFileKey2: typeof import("../node_modules/lucide-vue-next")['FileKey2']
export const LucideFileLineChart: typeof import("../node_modules/lucide-vue-next")['FileLineChart']
export const LucideFileLock: typeof import("../node_modules/lucide-vue-next")['FileLock']
export const LucideFileLock2: typeof import("../node_modules/lucide-vue-next")['FileLock2']
export const LucideFileMinus: typeof import("../node_modules/lucide-vue-next")['FileMinus']
export const LucideFileMinus2: typeof import("../node_modules/lucide-vue-next")['FileMinus2']
export const LucideFileMusic: typeof import("../node_modules/lucide-vue-next")['FileMusic']
export const LucideFileOutput: typeof import("../node_modules/lucide-vue-next")['FileOutput']
export const LucideFilePen: typeof import("../node_modules/lucide-vue-next")['FilePen']
export const LucideFilePenLine: typeof import("../node_modules/lucide-vue-next")['FilePenLine']
export const LucideFilePieChart: typeof import("../node_modules/lucide-vue-next")['FilePieChart']
export const LucideFilePlus: typeof import("../node_modules/lucide-vue-next")['FilePlus']
export const LucideFilePlus2: typeof import("../node_modules/lucide-vue-next")['FilePlus2']
export const LucideFileQuestion: typeof import("../node_modules/lucide-vue-next")['FileQuestion']
export const LucideFileScan: typeof import("../node_modules/lucide-vue-next")['FileScan']
export const LucideFileSearch: typeof import("../node_modules/lucide-vue-next")['FileSearch']
export const LucideFileSearch2: typeof import("../node_modules/lucide-vue-next")['FileSearch2']
export const LucideFileSignature: typeof import("../node_modules/lucide-vue-next")['FileSignature']
export const LucideFileSliders: typeof import("../node_modules/lucide-vue-next")['FileSliders']
export const LucideFileSpreadsheet: typeof import("../node_modules/lucide-vue-next")['FileSpreadsheet']
export const LucideFileStack: typeof import("../node_modules/lucide-vue-next")['FileStack']
export const LucideFileSymlink: typeof import("../node_modules/lucide-vue-next")['FileSymlink']
export const LucideFileTerminal: typeof import("../node_modules/lucide-vue-next")['FileTerminal']
export const LucideFileText: typeof import("../node_modules/lucide-vue-next")['FileText']
export const LucideFileType: typeof import("../node_modules/lucide-vue-next")['FileType']
export const LucideFileType2: typeof import("../node_modules/lucide-vue-next")['FileType2']
export const LucideFileUp: typeof import("../node_modules/lucide-vue-next")['FileUp']
export const LucideFileUser: typeof import("../node_modules/lucide-vue-next")['FileUser']
export const LucideFileVideo: typeof import("../node_modules/lucide-vue-next")['FileVideo']
export const LucideFileVideo2: typeof import("../node_modules/lucide-vue-next")['FileVideo2']
export const LucideFileVolume: typeof import("../node_modules/lucide-vue-next")['FileVolume']
export const LucideFileVolume2: typeof import("../node_modules/lucide-vue-next")['FileVolume2']
export const LucideFileWarning: typeof import("../node_modules/lucide-vue-next")['FileWarning']
export const LucideFileX: typeof import("../node_modules/lucide-vue-next")['FileX']
export const LucideFileX2: typeof import("../node_modules/lucide-vue-next")['FileX2']
export const LucideFiles: typeof import("../node_modules/lucide-vue-next")['Files']
export const LucideFilm: typeof import("../node_modules/lucide-vue-next")['Film']
export const LucideFilter: typeof import("../node_modules/lucide-vue-next")['Filter']
export const LucideFilterX: typeof import("../node_modules/lucide-vue-next")['FilterX']
export const LucideFingerprint: typeof import("../node_modules/lucide-vue-next")['Fingerprint']
export const LucideFireExtinguisher: typeof import("../node_modules/lucide-vue-next")['FireExtinguisher']
export const LucideFish: typeof import("../node_modules/lucide-vue-next")['Fish']
export const LucideFishOff: typeof import("../node_modules/lucide-vue-next")['FishOff']
export const LucideFishSymbol: typeof import("../node_modules/lucide-vue-next")['FishSymbol']
export const LucideFlag: typeof import("../node_modules/lucide-vue-next")['Flag']
export const LucideFlagOff: typeof import("../node_modules/lucide-vue-next")['FlagOff']
export const LucideFlagTriangleLeft: typeof import("../node_modules/lucide-vue-next")['FlagTriangleLeft']
export const LucideFlagTriangleRight: typeof import("../node_modules/lucide-vue-next")['FlagTriangleRight']
export const LucideFlame: typeof import("../node_modules/lucide-vue-next")['Flame']
export const LucideFlameKindling: typeof import("../node_modules/lucide-vue-next")['FlameKindling']
export const LucideFlashlight: typeof import("../node_modules/lucide-vue-next")['Flashlight']
export const LucideFlashlightOff: typeof import("../node_modules/lucide-vue-next")['FlashlightOff']
export const LucideFlaskConical: typeof import("../node_modules/lucide-vue-next")['FlaskConical']
export const LucideFlaskConicalOff: typeof import("../node_modules/lucide-vue-next")['FlaskConicalOff']
export const LucideFlaskRound: typeof import("../node_modules/lucide-vue-next")['FlaskRound']
export const LucideFlipHorizontal: typeof import("../node_modules/lucide-vue-next")['FlipHorizontal']
export const LucideFlipHorizontal2: typeof import("../node_modules/lucide-vue-next")['FlipHorizontal2']
export const LucideFlipVertical: typeof import("../node_modules/lucide-vue-next")['FlipVertical']
export const LucideFlipVertical2: typeof import("../node_modules/lucide-vue-next")['FlipVertical2']
export const LucideFlower: typeof import("../node_modules/lucide-vue-next")['Flower']
export const LucideFlower2: typeof import("../node_modules/lucide-vue-next")['Flower2']
export const LucideFocus: typeof import("../node_modules/lucide-vue-next")['Focus']
export const LucideFoldHorizontal: typeof import("../node_modules/lucide-vue-next")['FoldHorizontal']
export const LucideFoldVertical: typeof import("../node_modules/lucide-vue-next")['FoldVertical']
export const LucideFolder: typeof import("../node_modules/lucide-vue-next")['Folder']
export const LucideFolderArchive: typeof import("../node_modules/lucide-vue-next")['FolderArchive']
export const LucideFolderCheck: typeof import("../node_modules/lucide-vue-next")['FolderCheck']
export const LucideFolderClock: typeof import("../node_modules/lucide-vue-next")['FolderClock']
export const LucideFolderClosed: typeof import("../node_modules/lucide-vue-next")['FolderClosed']
export const LucideFolderCode: typeof import("../node_modules/lucide-vue-next")['FolderCode']
export const LucideFolderCog: typeof import("../node_modules/lucide-vue-next")['FolderCog']
export const LucideFolderCog2: typeof import("../node_modules/lucide-vue-next")['FolderCog2']
export const LucideFolderDot: typeof import("../node_modules/lucide-vue-next")['FolderDot']
export const LucideFolderDown: typeof import("../node_modules/lucide-vue-next")['FolderDown']
export const LucideFolderEdit: typeof import("../node_modules/lucide-vue-next")['FolderEdit']
export const LucideFolderGit: typeof import("../node_modules/lucide-vue-next")['FolderGit']
export const LucideFolderGit2: typeof import("../node_modules/lucide-vue-next")['FolderGit2']
export const LucideFolderHeart: typeof import("../node_modules/lucide-vue-next")['FolderHeart']
export const LucideFolderInput: typeof import("../node_modules/lucide-vue-next")['FolderInput']
export const LucideFolderKanban: typeof import("../node_modules/lucide-vue-next")['FolderKanban']
export const LucideFolderKey: typeof import("../node_modules/lucide-vue-next")['FolderKey']
export const LucideFolderLock: typeof import("../node_modules/lucide-vue-next")['FolderLock']
export const LucideFolderMinus: typeof import("../node_modules/lucide-vue-next")['FolderMinus']
export const LucideFolderOpen: typeof import("../node_modules/lucide-vue-next")['FolderOpen']
export const LucideFolderOpenDot: typeof import("../node_modules/lucide-vue-next")['FolderOpenDot']
export const LucideFolderOutput: typeof import("../node_modules/lucide-vue-next")['FolderOutput']
export const LucideFolderPen: typeof import("../node_modules/lucide-vue-next")['FolderPen']
export const LucideFolderPlus: typeof import("../node_modules/lucide-vue-next")['FolderPlus']
export const LucideFolderRoot: typeof import("../node_modules/lucide-vue-next")['FolderRoot']
export const LucideFolderSearch: typeof import("../node_modules/lucide-vue-next")['FolderSearch']
export const LucideFolderSearch2: typeof import("../node_modules/lucide-vue-next")['FolderSearch2']
export const LucideFolderSymlink: typeof import("../node_modules/lucide-vue-next")['FolderSymlink']
export const LucideFolderSync: typeof import("../node_modules/lucide-vue-next")['FolderSync']
export const LucideFolderTree: typeof import("../node_modules/lucide-vue-next")['FolderTree']
export const LucideFolderUp: typeof import("../node_modules/lucide-vue-next")['FolderUp']
export const LucideFolderX: typeof import("../node_modules/lucide-vue-next")['FolderX']
export const LucideFolders: typeof import("../node_modules/lucide-vue-next")['Folders']
export const LucideFootprints: typeof import("../node_modules/lucide-vue-next")['Footprints']
export const LucideForkKnife: typeof import("../node_modules/lucide-vue-next")['ForkKnife']
export const LucideForkKnifeCrossed: typeof import("../node_modules/lucide-vue-next")['ForkKnifeCrossed']
export const LucideForklift: typeof import("../node_modules/lucide-vue-next")['Forklift']
export const LucideFormInput: typeof import("../node_modules/lucide-vue-next")['FormInput']
export const LucideForward: typeof import("../node_modules/lucide-vue-next")['Forward']
export const LucideFrame: typeof import("../node_modules/lucide-vue-next")['Frame']
export const LucideFramer: typeof import("../node_modules/lucide-vue-next")['Framer']
export const LucideFrown: typeof import("../node_modules/lucide-vue-next")['Frown']
export const LucideFuel: typeof import("../node_modules/lucide-vue-next")['Fuel']
export const LucideFullscreen: typeof import("../node_modules/lucide-vue-next")['Fullscreen']
export const LucideFunctionSquare: typeof import("../node_modules/lucide-vue-next")['FunctionSquare']
export const LucideFunnel: typeof import("../node_modules/lucide-vue-next")['Funnel']
export const LucideFunnelPlus: typeof import("../node_modules/lucide-vue-next")['FunnelPlus']
export const LucideFunnelX: typeof import("../node_modules/lucide-vue-next")['FunnelX']
export const LucideGalleryHorizontal: typeof import("../node_modules/lucide-vue-next")['GalleryHorizontal']
export const LucideGalleryHorizontalEnd: typeof import("../node_modules/lucide-vue-next")['GalleryHorizontalEnd']
export const LucideGalleryThumbnails: typeof import("../node_modules/lucide-vue-next")['GalleryThumbnails']
export const LucideGalleryVertical: typeof import("../node_modules/lucide-vue-next")['GalleryVertical']
export const LucideGalleryVerticalEnd: typeof import("../node_modules/lucide-vue-next")['GalleryVerticalEnd']
export const LucideGamepad: typeof import("../node_modules/lucide-vue-next")['Gamepad']
export const LucideGamepad2: typeof import("../node_modules/lucide-vue-next")['Gamepad2']
export const LucideGanttChart: typeof import("../node_modules/lucide-vue-next")['GanttChart']
export const LucideGanttChartSquare: typeof import("../node_modules/lucide-vue-next")['GanttChartSquare']
export const LucideGauge: typeof import("../node_modules/lucide-vue-next")['Gauge']
export const LucideGaugeCircle: typeof import("../node_modules/lucide-vue-next")['GaugeCircle']
export const LucideGavel: typeof import("../node_modules/lucide-vue-next")['Gavel']
export const LucideGem: typeof import("../node_modules/lucide-vue-next")['Gem']
export const LucideGhost: typeof import("../node_modules/lucide-vue-next")['Ghost']
export const LucideGift: typeof import("../node_modules/lucide-vue-next")['Gift']
export const LucideGitBranch: typeof import("../node_modules/lucide-vue-next")['GitBranch']
export const LucideGitBranchPlus: typeof import("../node_modules/lucide-vue-next")['GitBranchPlus']
export const LucideGitCommit: typeof import("../node_modules/lucide-vue-next")['GitCommit']
export const LucideGitCommitHorizontal: typeof import("../node_modules/lucide-vue-next")['GitCommitHorizontal']
export const LucideGitCommitVertical: typeof import("../node_modules/lucide-vue-next")['GitCommitVertical']
export const LucideGitCompare: typeof import("../node_modules/lucide-vue-next")['GitCompare']
export const LucideGitCompareArrows: typeof import("../node_modules/lucide-vue-next")['GitCompareArrows']
export const LucideGitFork: typeof import("../node_modules/lucide-vue-next")['GitFork']
export const LucideGitGraph: typeof import("../node_modules/lucide-vue-next")['GitGraph']
export const LucideGitMerge: typeof import("../node_modules/lucide-vue-next")['GitMerge']
export const LucideGitPullRequest: typeof import("../node_modules/lucide-vue-next")['GitPullRequest']
export const LucideGitPullRequestArrow: typeof import("../node_modules/lucide-vue-next")['GitPullRequestArrow']
export const LucideGitPullRequestClosed: typeof import("../node_modules/lucide-vue-next")['GitPullRequestClosed']
export const LucideGitPullRequestCreate: typeof import("../node_modules/lucide-vue-next")['GitPullRequestCreate']
export const LucideGitPullRequestCreateArrow: typeof import("../node_modules/lucide-vue-next")['GitPullRequestCreateArrow']
export const LucideGitPullRequestDraft: typeof import("../node_modules/lucide-vue-next")['GitPullRequestDraft']
export const LucideGithub: typeof import("../node_modules/lucide-vue-next")['Github']
export const LucideGitlab: typeof import("../node_modules/lucide-vue-next")['Gitlab']
export const LucideGlassWater: typeof import("../node_modules/lucide-vue-next")['GlassWater']
export const LucideGlasses: typeof import("../node_modules/lucide-vue-next")['Glasses']
export const LucideGlobe: typeof import("../node_modules/lucide-vue-next")['Globe']
export const LucideGlobe2: typeof import("../node_modules/lucide-vue-next")['Globe2']
export const LucideGlobeLock: typeof import("../node_modules/lucide-vue-next")['GlobeLock']
export const LucideGoal: typeof import("../node_modules/lucide-vue-next")['Goal']
export const LucideGrab: typeof import("../node_modules/lucide-vue-next")['Grab']
export const LucideGraduationCap: typeof import("../node_modules/lucide-vue-next")['GraduationCap']
export const LucideGrape: typeof import("../node_modules/lucide-vue-next")['Grape']
export const LucideGrid: typeof import("../node_modules/lucide-vue-next")['Grid']
export const LucideGrid2x2: typeof import("../node_modules/lucide-vue-next")['Grid2x2']
export const LucideGrid2x2Check: typeof import("../node_modules/lucide-vue-next")['Grid2x2Check']
export const LucideGrid2x2Plus: typeof import("../node_modules/lucide-vue-next")['Grid2x2Plus']
export const LucideGrid2x2X: typeof import("../node_modules/lucide-vue-next")['Grid2x2X']
export const LucideGrid3x3: typeof import("../node_modules/lucide-vue-next")['Grid3x3']
export const LucideGrip: typeof import("../node_modules/lucide-vue-next")['Grip']
export const LucideGripHorizontal: typeof import("../node_modules/lucide-vue-next")['GripHorizontal']
export const LucideGripVertical: typeof import("../node_modules/lucide-vue-next")['GripVertical']
export const LucideGroup: typeof import("../node_modules/lucide-vue-next")['Group']
export const LucideGuitar: typeof import("../node_modules/lucide-vue-next")['Guitar']
export const LucideHam: typeof import("../node_modules/lucide-vue-next")['Ham']
export const LucideHammer: typeof import("../node_modules/lucide-vue-next")['Hammer']
export const LucideHand: typeof import("../node_modules/lucide-vue-next")['Hand']
export const LucideHandCoins: typeof import("../node_modules/lucide-vue-next")['HandCoins']
export const LucideHandHeart: typeof import("../node_modules/lucide-vue-next")['HandHeart']
export const LucideHandHelping: typeof import("../node_modules/lucide-vue-next")['HandHelping']
export const LucideHandMetal: typeof import("../node_modules/lucide-vue-next")['HandMetal']
export const LucideHandPlatter: typeof import("../node_modules/lucide-vue-next")['HandPlatter']
export const LucideHandshake: typeof import("../node_modules/lucide-vue-next")['Handshake']
export const LucideHardDrive: typeof import("../node_modules/lucide-vue-next")['HardDrive']
export const LucideHardDriveDownload: typeof import("../node_modules/lucide-vue-next")['HardDriveDownload']
export const LucideHardDriveUpload: typeof import("../node_modules/lucide-vue-next")['HardDriveUpload']
export const LucideHardHat: typeof import("../node_modules/lucide-vue-next")['HardHat']
export const LucideHash: typeof import("../node_modules/lucide-vue-next")['Hash']
export const LucideHaze: typeof import("../node_modules/lucide-vue-next")['Haze']
export const LucideHdmiPort: typeof import("../node_modules/lucide-vue-next")['HdmiPort']
export const LucideHeading: typeof import("../node_modules/lucide-vue-next")['Heading']
export const LucideHeading1: typeof import("../node_modules/lucide-vue-next")['Heading1']
export const LucideHeading2: typeof import("../node_modules/lucide-vue-next")['Heading2']
export const LucideHeading3: typeof import("../node_modules/lucide-vue-next")['Heading3']
export const LucideHeading4: typeof import("../node_modules/lucide-vue-next")['Heading4']
export const LucideHeading5: typeof import("../node_modules/lucide-vue-next")['Heading5']
export const LucideHeading6: typeof import("../node_modules/lucide-vue-next")['Heading6']
export const LucideHeadphoneOff: typeof import("../node_modules/lucide-vue-next")['HeadphoneOff']
export const LucideHeadphones: typeof import("../node_modules/lucide-vue-next")['Headphones']
export const LucideHeadset: typeof import("../node_modules/lucide-vue-next")['Headset']
export const LucideHeart: typeof import("../node_modules/lucide-vue-next")['Heart']
export const LucideHeartCrack: typeof import("../node_modules/lucide-vue-next")['HeartCrack']
export const LucideHeartHandshake: typeof import("../node_modules/lucide-vue-next")['HeartHandshake']
export const LucideHeartOff: typeof import("../node_modules/lucide-vue-next")['HeartOff']
export const LucideHeartPulse: typeof import("../node_modules/lucide-vue-next")['HeartPulse']
export const LucideHeater: typeof import("../node_modules/lucide-vue-next")['Heater']
export const LucideHelpCircle: typeof import("../node_modules/lucide-vue-next")['HelpCircle']
export const LucideHelpingHand: typeof import("../node_modules/lucide-vue-next")['HelpingHand']
export const LucideHexagon: typeof import("../node_modules/lucide-vue-next")['Hexagon']
export const LucideHighlighter: typeof import("../node_modules/lucide-vue-next")['Highlighter']
export const LucideHistory: typeof import("../node_modules/lucide-vue-next")['History']
export const LucideHome: typeof import("../node_modules/lucide-vue-next")['Home']
export const LucideHop: typeof import("../node_modules/lucide-vue-next")['Hop']
export const LucideHopOff: typeof import("../node_modules/lucide-vue-next")['HopOff']
export const LucideHospital: typeof import("../node_modules/lucide-vue-next")['Hospital']
export const LucideHotel: typeof import("../node_modules/lucide-vue-next")['Hotel']
export const LucideHourglass: typeof import("../node_modules/lucide-vue-next")['Hourglass']
export const LucideHouse: typeof import("../node_modules/lucide-vue-next")['House']
export const LucideHousePlug: typeof import("../node_modules/lucide-vue-next")['HousePlug']
export const LucideHousePlus: typeof import("../node_modules/lucide-vue-next")['HousePlus']
export const LucideHouseWifi: typeof import("../node_modules/lucide-vue-next")['HouseWifi']
export const LucideIceCream: typeof import("../node_modules/lucide-vue-next")['IceCream']
export const LucideIceCream2: typeof import("../node_modules/lucide-vue-next")['IceCream2']
export const LucideIceCreamBowl: typeof import("../node_modules/lucide-vue-next")['IceCreamBowl']
export const LucideIceCreamCone: typeof import("../node_modules/lucide-vue-next")['IceCreamCone']
export const LucideIdCard: typeof import("../node_modules/lucide-vue-next")['IdCard']
export const LucideImage: typeof import("../node_modules/lucide-vue-next")['Image']
export const LucideImageDown: typeof import("../node_modules/lucide-vue-next")['ImageDown']
export const LucideImageMinus: typeof import("../node_modules/lucide-vue-next")['ImageMinus']
export const LucideImageOff: typeof import("../node_modules/lucide-vue-next")['ImageOff']
export const LucideImagePlay: typeof import("../node_modules/lucide-vue-next")['ImagePlay']
export const LucideImagePlus: typeof import("../node_modules/lucide-vue-next")['ImagePlus']
export const LucideImageUp: typeof import("../node_modules/lucide-vue-next")['ImageUp']
export const LucideImageUpscale: typeof import("../node_modules/lucide-vue-next")['ImageUpscale']
export const LucideImages: typeof import("../node_modules/lucide-vue-next")['Images']
export const LucideImport: typeof import("../node_modules/lucide-vue-next")['Import']
export const LucideInbox: typeof import("../node_modules/lucide-vue-next")['Inbox']
export const LucideIndent: typeof import("../node_modules/lucide-vue-next")['Indent']
export const LucideIndentDecrease: typeof import("../node_modules/lucide-vue-next")['IndentDecrease']
export const LucideIndentIncrease: typeof import("../node_modules/lucide-vue-next")['IndentIncrease']
export const LucideIndianRupee: typeof import("../node_modules/lucide-vue-next")['IndianRupee']
export const LucideInfinity: typeof import("../node_modules/lucide-vue-next")['Infinity']
export const LucideInfo: typeof import("../node_modules/lucide-vue-next")['Info']
export const LucideInspect: typeof import("../node_modules/lucide-vue-next")['Inspect']
export const LucideInspectionPanel: typeof import("../node_modules/lucide-vue-next")['InspectionPanel']
export const LucideInstagram: typeof import("../node_modules/lucide-vue-next")['Instagram']
export const LucideItalic: typeof import("../node_modules/lucide-vue-next")['Italic']
export const LucideIterationCcw: typeof import("../node_modules/lucide-vue-next")['IterationCcw']
export const LucideIterationCw: typeof import("../node_modules/lucide-vue-next")['IterationCw']
export const LucideJapaneseYen: typeof import("../node_modules/lucide-vue-next")['JapaneseYen']
export const LucideJoystick: typeof import("../node_modules/lucide-vue-next")['Joystick']
export const LucideKanban: typeof import("../node_modules/lucide-vue-next")['Kanban']
export const LucideKanbanSquare: typeof import("../node_modules/lucide-vue-next")['KanbanSquare']
export const LucideKanbanSquareDashed: typeof import("../node_modules/lucide-vue-next")['KanbanSquareDashed']
export const LucideKey: typeof import("../node_modules/lucide-vue-next")['Key']
export const LucideKeyRound: typeof import("../node_modules/lucide-vue-next")['KeyRound']
export const LucideKeySquare: typeof import("../node_modules/lucide-vue-next")['KeySquare']
export const LucideKeyboard: typeof import("../node_modules/lucide-vue-next")['Keyboard']
export const LucideKeyboardMusic: typeof import("../node_modules/lucide-vue-next")['KeyboardMusic']
export const LucideKeyboardOff: typeof import("../node_modules/lucide-vue-next")['KeyboardOff']
export const LucideLamp: typeof import("../node_modules/lucide-vue-next")['Lamp']
export const LucideLampCeiling: typeof import("../node_modules/lucide-vue-next")['LampCeiling']
export const LucideLampDesk: typeof import("../node_modules/lucide-vue-next")['LampDesk']
export const LucideLampFloor: typeof import("../node_modules/lucide-vue-next")['LampFloor']
export const LucideLampWallDown: typeof import("../node_modules/lucide-vue-next")['LampWallDown']
export const LucideLampWallUp: typeof import("../node_modules/lucide-vue-next")['LampWallUp']
export const LucideLandPlot: typeof import("../node_modules/lucide-vue-next")['LandPlot']
export const LucideLandmark: typeof import("../node_modules/lucide-vue-next")['Landmark']
export const LucideLanguages: typeof import("../node_modules/lucide-vue-next")['Languages']
export const LucideLaptop: typeof import("../node_modules/lucide-vue-next")['Laptop']
export const LucideLaptop2: typeof import("../node_modules/lucide-vue-next")['Laptop2']
export const LucideLaptopMinimal: typeof import("../node_modules/lucide-vue-next")['LaptopMinimal']
export const LucideLaptopMinimalCheck: typeof import("../node_modules/lucide-vue-next")['LaptopMinimalCheck']
export const LucideLasso: typeof import("../node_modules/lucide-vue-next")['Lasso']
export const LucideLassoSelect: typeof import("../node_modules/lucide-vue-next")['LassoSelect']
export const LucideLaugh: typeof import("../node_modules/lucide-vue-next")['Laugh']
export const LucideLayers: typeof import("../node_modules/lucide-vue-next")['Layers']
export const LucideLayers2: typeof import("../node_modules/lucide-vue-next")['Layers2']
export const LucideLayers3: typeof import("../node_modules/lucide-vue-next")['Layers3']
export const LucideLayout: typeof import("../node_modules/lucide-vue-next")['Layout']
export const LucideLayoutDashboard: typeof import("../node_modules/lucide-vue-next")['LayoutDashboard']
export const LucideLayoutGrid: typeof import("../node_modules/lucide-vue-next")['LayoutGrid']
export const LucideLayoutList: typeof import("../node_modules/lucide-vue-next")['LayoutList']
export const LucideLayoutPanelLeft: typeof import("../node_modules/lucide-vue-next")['LayoutPanelLeft']
export const LucideLayoutPanelTop: typeof import("../node_modules/lucide-vue-next")['LayoutPanelTop']
export const LucideLayoutTemplate: typeof import("../node_modules/lucide-vue-next")['LayoutTemplate']
export const LucideLeaf: typeof import("../node_modules/lucide-vue-next")['Leaf']
export const LucideLeafyGreen: typeof import("../node_modules/lucide-vue-next")['LeafyGreen']
export const LucideLectern: typeof import("../node_modules/lucide-vue-next")['Lectern']
export const LucideLetterText: typeof import("../node_modules/lucide-vue-next")['LetterText']
export const LucideLibrary: typeof import("../node_modules/lucide-vue-next")['Library']
export const LucideLibraryBig: typeof import("../node_modules/lucide-vue-next")['LibraryBig']
export const LucideLibrarySquare: typeof import("../node_modules/lucide-vue-next")['LibrarySquare']
export const LucideLifeBuoy: typeof import("../node_modules/lucide-vue-next")['LifeBuoy']
export const LucideLigature: typeof import("../node_modules/lucide-vue-next")['Ligature']
export const LucideLightbulb: typeof import("../node_modules/lucide-vue-next")['Lightbulb']
export const LucideLightbulbOff: typeof import("../node_modules/lucide-vue-next")['LightbulbOff']
export const LucideLineChart: typeof import("../node_modules/lucide-vue-next")['LineChart']
export const LucideLink: typeof import("../node_modules/lucide-vue-next")['Link']
export const LucideLink2: typeof import("../node_modules/lucide-vue-next")['Link2']
export const LucideLink2Off: typeof import("../node_modules/lucide-vue-next")['Link2Off']
export const LucideLinkedin: typeof import("../node_modules/lucide-vue-next")['Linkedin']
export const LucideList: typeof import("../node_modules/lucide-vue-next")['List']
export const LucideListCheck: typeof import("../node_modules/lucide-vue-next")['ListCheck']
export const LucideListChecks: typeof import("../node_modules/lucide-vue-next")['ListChecks']
export const LucideListCollapse: typeof import("../node_modules/lucide-vue-next")['ListCollapse']
export const LucideListEnd: typeof import("../node_modules/lucide-vue-next")['ListEnd']
export const LucideListFilter: typeof import("../node_modules/lucide-vue-next")['ListFilter']
export const LucideListFilterPlus: typeof import("../node_modules/lucide-vue-next")['ListFilterPlus']
export const LucideListMinus: typeof import("../node_modules/lucide-vue-next")['ListMinus']
export const LucideListMusic: typeof import("../node_modules/lucide-vue-next")['ListMusic']
export const LucideListOrdered: typeof import("../node_modules/lucide-vue-next")['ListOrdered']
export const LucideListPlus: typeof import("../node_modules/lucide-vue-next")['ListPlus']
export const LucideListRestart: typeof import("../node_modules/lucide-vue-next")['ListRestart']
export const LucideListStart: typeof import("../node_modules/lucide-vue-next")['ListStart']
export const LucideListTodo: typeof import("../node_modules/lucide-vue-next")['ListTodo']
export const LucideListTree: typeof import("../node_modules/lucide-vue-next")['ListTree']
export const LucideListVideo: typeof import("../node_modules/lucide-vue-next")['ListVideo']
export const LucideListX: typeof import("../node_modules/lucide-vue-next")['ListX']
export const LucideLoader: typeof import("../node_modules/lucide-vue-next")['Loader']
export const LucideLoader2: typeof import("../node_modules/lucide-vue-next")['Loader2']
export const LucideLoaderCircle: typeof import("../node_modules/lucide-vue-next")['LoaderCircle']
export const LucideLoaderPinwheel: typeof import("../node_modules/lucide-vue-next")['LoaderPinwheel']
export const LucideLocate: typeof import("../node_modules/lucide-vue-next")['Locate']
export const LucideLocateFixed: typeof import("../node_modules/lucide-vue-next")['LocateFixed']
export const LucideLocateOff: typeof import("../node_modules/lucide-vue-next")['LocateOff']
export const LucideLock: typeof import("../node_modules/lucide-vue-next")['Lock']
export const LucideLockKeyhole: typeof import("../node_modules/lucide-vue-next")['LockKeyhole']
export const LucideLockKeyholeOpen: typeof import("../node_modules/lucide-vue-next")['LockKeyholeOpen']
export const LucideLockOpen: typeof import("../node_modules/lucide-vue-next")['LockOpen']
export const LucideLogIn: typeof import("../node_modules/lucide-vue-next")['LogIn']
export const LucideLogOut: typeof import("../node_modules/lucide-vue-next")['LogOut']
export const LucideLogs: typeof import("../node_modules/lucide-vue-next")['Logs']
export const LucideLollipop: typeof import("../node_modules/lucide-vue-next")['Lollipop']
export const LucideLuggage: typeof import("../node_modules/lucide-vue-next")['Luggage']
export const LucideMSquare: typeof import("../node_modules/lucide-vue-next")['MSquare']
export const LucideMagnet: typeof import("../node_modules/lucide-vue-next")['Magnet']
export const LucideMail: typeof import("../node_modules/lucide-vue-next")['Mail']
export const LucideMailCheck: typeof import("../node_modules/lucide-vue-next")['MailCheck']
export const LucideMailMinus: typeof import("../node_modules/lucide-vue-next")['MailMinus']
export const LucideMailOpen: typeof import("../node_modules/lucide-vue-next")['MailOpen']
export const LucideMailPlus: typeof import("../node_modules/lucide-vue-next")['MailPlus']
export const LucideMailQuestion: typeof import("../node_modules/lucide-vue-next")['MailQuestion']
export const LucideMailSearch: typeof import("../node_modules/lucide-vue-next")['MailSearch']
export const LucideMailWarning: typeof import("../node_modules/lucide-vue-next")['MailWarning']
export const LucideMailX: typeof import("../node_modules/lucide-vue-next")['MailX']
export const LucideMailbox: typeof import("../node_modules/lucide-vue-next")['Mailbox']
export const LucideMails: typeof import("../node_modules/lucide-vue-next")['Mails']
export const LucideMap: typeof import("../node_modules/lucide-vue-next")['Map']
export const LucideMapPin: typeof import("../node_modules/lucide-vue-next")['MapPin']
export const LucideMapPinCheck: typeof import("../node_modules/lucide-vue-next")['MapPinCheck']
export const LucideMapPinCheckInside: typeof import("../node_modules/lucide-vue-next")['MapPinCheckInside']
export const LucideMapPinHouse: typeof import("../node_modules/lucide-vue-next")['MapPinHouse']
export const LucideMapPinMinus: typeof import("../node_modules/lucide-vue-next")['MapPinMinus']
export const LucideMapPinMinusInside: typeof import("../node_modules/lucide-vue-next")['MapPinMinusInside']
export const LucideMapPinOff: typeof import("../node_modules/lucide-vue-next")['MapPinOff']
export const LucideMapPinPlus: typeof import("../node_modules/lucide-vue-next")['MapPinPlus']
export const LucideMapPinPlusInside: typeof import("../node_modules/lucide-vue-next")['MapPinPlusInside']
export const LucideMapPinX: typeof import("../node_modules/lucide-vue-next")['MapPinX']
export const LucideMapPinXInside: typeof import("../node_modules/lucide-vue-next")['MapPinXInside']
export const LucideMapPinned: typeof import("../node_modules/lucide-vue-next")['MapPinned']
export const LucideMapPlus: typeof import("../node_modules/lucide-vue-next")['MapPlus']
export const LucideMars: typeof import("../node_modules/lucide-vue-next")['Mars']
export const LucideMarsStroke: typeof import("../node_modules/lucide-vue-next")['MarsStroke']
export const LucideMartini: typeof import("../node_modules/lucide-vue-next")['Martini']
export const LucideMaximize: typeof import("../node_modules/lucide-vue-next")['Maximize']
export const LucideMaximize2: typeof import("../node_modules/lucide-vue-next")['Maximize2']
export const LucideMedal: typeof import("../node_modules/lucide-vue-next")['Medal']
export const LucideMegaphone: typeof import("../node_modules/lucide-vue-next")['Megaphone']
export const LucideMegaphoneOff: typeof import("../node_modules/lucide-vue-next")['MegaphoneOff']
export const LucideMeh: typeof import("../node_modules/lucide-vue-next")['Meh']
export const LucideMemoryStick: typeof import("../node_modules/lucide-vue-next")['MemoryStick']
export const LucideMenu: typeof import("../node_modules/lucide-vue-next")['Menu']
export const LucideMenuSquare: typeof import("../node_modules/lucide-vue-next")['MenuSquare']
export const LucideMerge: typeof import("../node_modules/lucide-vue-next")['Merge']
export const LucideMessageCircle: typeof import("../node_modules/lucide-vue-next")['MessageCircle']
export const LucideMessageCircleCode: typeof import("../node_modules/lucide-vue-next")['MessageCircleCode']
export const LucideMessageCircleDashed: typeof import("../node_modules/lucide-vue-next")['MessageCircleDashed']
export const LucideMessageCircleHeart: typeof import("../node_modules/lucide-vue-next")['MessageCircleHeart']
export const LucideMessageCircleMore: typeof import("../node_modules/lucide-vue-next")['MessageCircleMore']
export const LucideMessageCircleOff: typeof import("../node_modules/lucide-vue-next")['MessageCircleOff']
export const LucideMessageCirclePlus: typeof import("../node_modules/lucide-vue-next")['MessageCirclePlus']
export const LucideMessageCircleQuestion: typeof import("../node_modules/lucide-vue-next")['MessageCircleQuestion']
export const LucideMessageCircleReply: typeof import("../node_modules/lucide-vue-next")['MessageCircleReply']
export const LucideMessageCircleWarning: typeof import("../node_modules/lucide-vue-next")['MessageCircleWarning']
export const LucideMessageCircleX: typeof import("../node_modules/lucide-vue-next")['MessageCircleX']
export const LucideMessageSquare: typeof import("../node_modules/lucide-vue-next")['MessageSquare']
export const LucideMessageSquareCode: typeof import("../node_modules/lucide-vue-next")['MessageSquareCode']
export const LucideMessageSquareDashed: typeof import("../node_modules/lucide-vue-next")['MessageSquareDashed']
export const LucideMessageSquareDiff: typeof import("../node_modules/lucide-vue-next")['MessageSquareDiff']
export const LucideMessageSquareDot: typeof import("../node_modules/lucide-vue-next")['MessageSquareDot']
export const LucideMessageSquareHeart: typeof import("../node_modules/lucide-vue-next")['MessageSquareHeart']
export const LucideMessageSquareLock: typeof import("../node_modules/lucide-vue-next")['MessageSquareLock']
export const LucideMessageSquareMore: typeof import("../node_modules/lucide-vue-next")['MessageSquareMore']
export const LucideMessageSquareOff: typeof import("../node_modules/lucide-vue-next")['MessageSquareOff']
export const LucideMessageSquarePlus: typeof import("../node_modules/lucide-vue-next")['MessageSquarePlus']
export const LucideMessageSquareQuote: typeof import("../node_modules/lucide-vue-next")['MessageSquareQuote']
export const LucideMessageSquareReply: typeof import("../node_modules/lucide-vue-next")['MessageSquareReply']
export const LucideMessageSquareShare: typeof import("../node_modules/lucide-vue-next")['MessageSquareShare']
export const LucideMessageSquareText: typeof import("../node_modules/lucide-vue-next")['MessageSquareText']
export const LucideMessageSquareWarning: typeof import("../node_modules/lucide-vue-next")['MessageSquareWarning']
export const LucideMessageSquareX: typeof import("../node_modules/lucide-vue-next")['MessageSquareX']
export const LucideMessagesSquare: typeof import("../node_modules/lucide-vue-next")['MessagesSquare']
export const LucideMic: typeof import("../node_modules/lucide-vue-next")['Mic']
export const LucideMic2: typeof import("../node_modules/lucide-vue-next")['Mic2']
export const LucideMicOff: typeof import("../node_modules/lucide-vue-next")['MicOff']
export const LucideMicVocal: typeof import("../node_modules/lucide-vue-next")['MicVocal']
export const LucideMicrochip: typeof import("../node_modules/lucide-vue-next")['Microchip']
export const LucideMicroscope: typeof import("../node_modules/lucide-vue-next")['Microscope']
export const LucideMicrowave: typeof import("../node_modules/lucide-vue-next")['Microwave']
export const LucideMilestone: typeof import("../node_modules/lucide-vue-next")['Milestone']
export const LucideMilk: typeof import("../node_modules/lucide-vue-next")['Milk']
export const LucideMilkOff: typeof import("../node_modules/lucide-vue-next")['MilkOff']
export const LucideMinimize: typeof import("../node_modules/lucide-vue-next")['Minimize']
export const LucideMinimize2: typeof import("../node_modules/lucide-vue-next")['Minimize2']
export const LucideMinus: typeof import("../node_modules/lucide-vue-next")['Minus']
export const LucideMinusCircle: typeof import("../node_modules/lucide-vue-next")['MinusCircle']
export const LucideMinusSquare: typeof import("../node_modules/lucide-vue-next")['MinusSquare']
export const LucideMonitor: typeof import("../node_modules/lucide-vue-next")['Monitor']
export const LucideMonitorCheck: typeof import("../node_modules/lucide-vue-next")['MonitorCheck']
export const LucideMonitorCog: typeof import("../node_modules/lucide-vue-next")['MonitorCog']
export const LucideMonitorDot: typeof import("../node_modules/lucide-vue-next")['MonitorDot']
export const LucideMonitorDown: typeof import("../node_modules/lucide-vue-next")['MonitorDown']
export const LucideMonitorOff: typeof import("../node_modules/lucide-vue-next")['MonitorOff']
export const LucideMonitorPause: typeof import("../node_modules/lucide-vue-next")['MonitorPause']
export const LucideMonitorPlay: typeof import("../node_modules/lucide-vue-next")['MonitorPlay']
export const LucideMonitorSmartphone: typeof import("../node_modules/lucide-vue-next")['MonitorSmartphone']
export const LucideMonitorSpeaker: typeof import("../node_modules/lucide-vue-next")['MonitorSpeaker']
export const LucideMonitorStop: typeof import("../node_modules/lucide-vue-next")['MonitorStop']
export const LucideMonitorUp: typeof import("../node_modules/lucide-vue-next")['MonitorUp']
export const LucideMonitorX: typeof import("../node_modules/lucide-vue-next")['MonitorX']
export const LucideMoon: typeof import("../node_modules/lucide-vue-next")['Moon']
export const LucideMoonStar: typeof import("../node_modules/lucide-vue-next")['MoonStar']
export const LucideMoreHorizontal: typeof import("../node_modules/lucide-vue-next")['MoreHorizontal']
export const LucideMoreVertical: typeof import("../node_modules/lucide-vue-next")['MoreVertical']
export const LucideMountain: typeof import("../node_modules/lucide-vue-next")['Mountain']
export const LucideMountainSnow: typeof import("../node_modules/lucide-vue-next")['MountainSnow']
export const LucideMouse: typeof import("../node_modules/lucide-vue-next")['Mouse']
export const LucideMouseOff: typeof import("../node_modules/lucide-vue-next")['MouseOff']
export const LucideMousePointer: typeof import("../node_modules/lucide-vue-next")['MousePointer']
export const LucideMousePointer2: typeof import("../node_modules/lucide-vue-next")['MousePointer2']
export const LucideMousePointerBan: typeof import("../node_modules/lucide-vue-next")['MousePointerBan']
export const LucideMousePointerClick: typeof import("../node_modules/lucide-vue-next")['MousePointerClick']
export const LucideMousePointerSquareDashed: typeof import("../node_modules/lucide-vue-next")['MousePointerSquareDashed']
export const LucideMove: typeof import("../node_modules/lucide-vue-next")['Move']
export const LucideMove3d: typeof import("../node_modules/lucide-vue-next")['Move3d']
export const LucideMoveDiagonal: typeof import("../node_modules/lucide-vue-next")['MoveDiagonal']
export const LucideMoveDiagonal2: typeof import("../node_modules/lucide-vue-next")['MoveDiagonal2']
export const LucideMoveDown: typeof import("../node_modules/lucide-vue-next")['MoveDown']
export const LucideMoveDownLeft: typeof import("../node_modules/lucide-vue-next")['MoveDownLeft']
export const LucideMoveDownRight: typeof import("../node_modules/lucide-vue-next")['MoveDownRight']
export const LucideMoveHorizontal: typeof import("../node_modules/lucide-vue-next")['MoveHorizontal']
export const LucideMoveLeft: typeof import("../node_modules/lucide-vue-next")['MoveLeft']
export const LucideMoveRight: typeof import("../node_modules/lucide-vue-next")['MoveRight']
export const LucideMoveUp: typeof import("../node_modules/lucide-vue-next")['MoveUp']
export const LucideMoveUpLeft: typeof import("../node_modules/lucide-vue-next")['MoveUpLeft']
export const LucideMoveUpRight: typeof import("../node_modules/lucide-vue-next")['MoveUpRight']
export const LucideMoveVertical: typeof import("../node_modules/lucide-vue-next")['MoveVertical']
export const LucideMusic: typeof import("../node_modules/lucide-vue-next")['Music']
export const LucideMusic2: typeof import("../node_modules/lucide-vue-next")['Music2']
export const LucideMusic3: typeof import("../node_modules/lucide-vue-next")['Music3']
export const LucideMusic4: typeof import("../node_modules/lucide-vue-next")['Music4']
export const LucideNavigation: typeof import("../node_modules/lucide-vue-next")['Navigation']
export const LucideNavigation2: typeof import("../node_modules/lucide-vue-next")['Navigation2']
export const LucideNavigation2Off: typeof import("../node_modules/lucide-vue-next")['Navigation2Off']
export const LucideNavigationOff: typeof import("../node_modules/lucide-vue-next")['NavigationOff']
export const LucideNetwork: typeof import("../node_modules/lucide-vue-next")['Network']
export const LucideNewspaper: typeof import("../node_modules/lucide-vue-next")['Newspaper']
export const LucideNfc: typeof import("../node_modules/lucide-vue-next")['Nfc']
export const LucideNonBinary: typeof import("../node_modules/lucide-vue-next")['NonBinary']
export const LucideNotebook: typeof import("../node_modules/lucide-vue-next")['Notebook']
export const LucideNotebookPen: typeof import("../node_modules/lucide-vue-next")['NotebookPen']
export const LucideNotebookTabs: typeof import("../node_modules/lucide-vue-next")['NotebookTabs']
export const LucideNotebookText: typeof import("../node_modules/lucide-vue-next")['NotebookText']
export const LucideNotepadText: typeof import("../node_modules/lucide-vue-next")['NotepadText']
export const LucideNotepadTextDashed: typeof import("../node_modules/lucide-vue-next")['NotepadTextDashed']
export const LucideNut: typeof import("../node_modules/lucide-vue-next")['Nut']
export const LucideNutOff: typeof import("../node_modules/lucide-vue-next")['NutOff']
export const LucideOctagon: typeof import("../node_modules/lucide-vue-next")['Octagon']
export const LucideOctagonAlert: typeof import("../node_modules/lucide-vue-next")['OctagonAlert']
export const LucideOctagonMinus: typeof import("../node_modules/lucide-vue-next")['OctagonMinus']
export const LucideOctagonPause: typeof import("../node_modules/lucide-vue-next")['OctagonPause']
export const LucideOctagonX: typeof import("../node_modules/lucide-vue-next")['OctagonX']
export const LucideOmega: typeof import("../node_modules/lucide-vue-next")['Omega']
export const LucideOption: typeof import("../node_modules/lucide-vue-next")['Option']
export const LucideOrbit: typeof import("../node_modules/lucide-vue-next")['Orbit']
export const LucideOrigami: typeof import("../node_modules/lucide-vue-next")['Origami']
export const LucideOutdent: typeof import("../node_modules/lucide-vue-next")['Outdent']
export const LucidePackage: typeof import("../node_modules/lucide-vue-next")['Package']
export const LucidePackage2: typeof import("../node_modules/lucide-vue-next")['Package2']
export const LucidePackageCheck: typeof import("../node_modules/lucide-vue-next")['PackageCheck']
export const LucidePackageMinus: typeof import("../node_modules/lucide-vue-next")['PackageMinus']
export const LucidePackageOpen: typeof import("../node_modules/lucide-vue-next")['PackageOpen']
export const LucidePackagePlus: typeof import("../node_modules/lucide-vue-next")['PackagePlus']
export const LucidePackageSearch: typeof import("../node_modules/lucide-vue-next")['PackageSearch']
export const LucidePackageX: typeof import("../node_modules/lucide-vue-next")['PackageX']
export const LucidePaintBucket: typeof import("../node_modules/lucide-vue-next")['PaintBucket']
export const LucidePaintRoller: typeof import("../node_modules/lucide-vue-next")['PaintRoller']
export const LucidePaintbrush: typeof import("../node_modules/lucide-vue-next")['Paintbrush']
export const LucidePaintbrush2: typeof import("../node_modules/lucide-vue-next")['Paintbrush2']
export const LucidePaintbrushVertical: typeof import("../node_modules/lucide-vue-next")['PaintbrushVertical']
export const LucidePalette: typeof import("../node_modules/lucide-vue-next")['Palette']
export const LucidePalmtree: typeof import("../node_modules/lucide-vue-next")['Palmtree']
export const LucidePanelBottom: typeof import("../node_modules/lucide-vue-next")['PanelBottom']
export const LucidePanelBottomClose: typeof import("../node_modules/lucide-vue-next")['PanelBottomClose']
export const LucidePanelBottomDashed: typeof import("../node_modules/lucide-vue-next")['PanelBottomDashed']
export const LucidePanelBottomInactive: typeof import("../node_modules/lucide-vue-next")['PanelBottomInactive']
export const LucidePanelBottomOpen: typeof import("../node_modules/lucide-vue-next")['PanelBottomOpen']
export const LucidePanelLeft: typeof import("../node_modules/lucide-vue-next")['PanelLeft']
export const LucidePanelLeftClose: typeof import("../node_modules/lucide-vue-next")['PanelLeftClose']
export const LucidePanelLeftDashed: typeof import("../node_modules/lucide-vue-next")['PanelLeftDashed']
export const LucidePanelLeftInactive: typeof import("../node_modules/lucide-vue-next")['PanelLeftInactive']
export const LucidePanelLeftOpen: typeof import("../node_modules/lucide-vue-next")['PanelLeftOpen']
export const LucidePanelRight: typeof import("../node_modules/lucide-vue-next")['PanelRight']
export const LucidePanelRightClose: typeof import("../node_modules/lucide-vue-next")['PanelRightClose']
export const LucidePanelRightDashed: typeof import("../node_modules/lucide-vue-next")['PanelRightDashed']
export const LucidePanelRightInactive: typeof import("../node_modules/lucide-vue-next")['PanelRightInactive']
export const LucidePanelRightOpen: typeof import("../node_modules/lucide-vue-next")['PanelRightOpen']
export const LucidePanelTop: typeof import("../node_modules/lucide-vue-next")['PanelTop']
export const LucidePanelTopClose: typeof import("../node_modules/lucide-vue-next")['PanelTopClose']
export const LucidePanelTopDashed: typeof import("../node_modules/lucide-vue-next")['PanelTopDashed']
export const LucidePanelTopInactive: typeof import("../node_modules/lucide-vue-next")['PanelTopInactive']
export const LucidePanelTopOpen: typeof import("../node_modules/lucide-vue-next")['PanelTopOpen']
export const LucidePanelsLeftBottom: typeof import("../node_modules/lucide-vue-next")['PanelsLeftBottom']
export const LucidePanelsLeftRight: typeof import("../node_modules/lucide-vue-next")['PanelsLeftRight']
export const LucidePanelsRightBottom: typeof import("../node_modules/lucide-vue-next")['PanelsRightBottom']
export const LucidePanelsTopBottom: typeof import("../node_modules/lucide-vue-next")['PanelsTopBottom']
export const LucidePanelsTopLeft: typeof import("../node_modules/lucide-vue-next")['PanelsTopLeft']
export const LucidePaperclip: typeof import("../node_modules/lucide-vue-next")['Paperclip']
export const LucideParentheses: typeof import("../node_modules/lucide-vue-next")['Parentheses']
export const LucideParkingCircle: typeof import("../node_modules/lucide-vue-next")['ParkingCircle']
export const LucideParkingCircleOff: typeof import("../node_modules/lucide-vue-next")['ParkingCircleOff']
export const LucideParkingMeter: typeof import("../node_modules/lucide-vue-next")['ParkingMeter']
export const LucideParkingSquare: typeof import("../node_modules/lucide-vue-next")['ParkingSquare']
export const LucideParkingSquareOff: typeof import("../node_modules/lucide-vue-next")['ParkingSquareOff']
export const LucidePartyPopper: typeof import("../node_modules/lucide-vue-next")['PartyPopper']
export const LucidePause: typeof import("../node_modules/lucide-vue-next")['Pause']
export const LucidePauseCircle: typeof import("../node_modules/lucide-vue-next")['PauseCircle']
export const LucidePauseOctagon: typeof import("../node_modules/lucide-vue-next")['PauseOctagon']
export const LucidePawPrint: typeof import("../node_modules/lucide-vue-next")['PawPrint']
export const LucidePcCase: typeof import("../node_modules/lucide-vue-next")['PcCase']
export const LucidePen: typeof import("../node_modules/lucide-vue-next")['Pen']
export const LucidePenBox: typeof import("../node_modules/lucide-vue-next")['PenBox']
export const LucidePenLine: typeof import("../node_modules/lucide-vue-next")['PenLine']
export const LucidePenOff: typeof import("../node_modules/lucide-vue-next")['PenOff']
export const LucidePenSquare: typeof import("../node_modules/lucide-vue-next")['PenSquare']
export const LucidePenTool: typeof import("../node_modules/lucide-vue-next")['PenTool']
export const LucidePencil: typeof import("../node_modules/lucide-vue-next")['Pencil']
export const LucidePencilLine: typeof import("../node_modules/lucide-vue-next")['PencilLine']
export const LucidePencilOff: typeof import("../node_modules/lucide-vue-next")['PencilOff']
export const LucidePencilRuler: typeof import("../node_modules/lucide-vue-next")['PencilRuler']
export const LucidePentagon: typeof import("../node_modules/lucide-vue-next")['Pentagon']
export const LucidePercent: typeof import("../node_modules/lucide-vue-next")['Percent']
export const LucidePercentCircle: typeof import("../node_modules/lucide-vue-next")['PercentCircle']
export const LucidePercentDiamond: typeof import("../node_modules/lucide-vue-next")['PercentDiamond']
export const LucidePercentSquare: typeof import("../node_modules/lucide-vue-next")['PercentSquare']
export const LucidePersonStanding: typeof import("../node_modules/lucide-vue-next")['PersonStanding']
export const LucidePhilippinePeso: typeof import("../node_modules/lucide-vue-next")['PhilippinePeso']
export const LucidePhone: typeof import("../node_modules/lucide-vue-next")['Phone']
export const LucidePhoneCall: typeof import("../node_modules/lucide-vue-next")['PhoneCall']
export const LucidePhoneForwarded: typeof import("../node_modules/lucide-vue-next")['PhoneForwarded']
export const LucidePhoneIncoming: typeof import("../node_modules/lucide-vue-next")['PhoneIncoming']
export const LucidePhoneMissed: typeof import("../node_modules/lucide-vue-next")['PhoneMissed']
export const LucidePhoneOff: typeof import("../node_modules/lucide-vue-next")['PhoneOff']
export const LucidePhoneOutgoing: typeof import("../node_modules/lucide-vue-next")['PhoneOutgoing']
export const LucidePi: typeof import("../node_modules/lucide-vue-next")['Pi']
export const LucidePiSquare: typeof import("../node_modules/lucide-vue-next")['PiSquare']
export const LucidePiano: typeof import("../node_modules/lucide-vue-next")['Piano']
export const LucidePickaxe: typeof import("../node_modules/lucide-vue-next")['Pickaxe']
export const LucidePictureInPicture: typeof import("../node_modules/lucide-vue-next")['PictureInPicture']
export const LucidePictureInPicture2: typeof import("../node_modules/lucide-vue-next")['PictureInPicture2']
export const LucidePieChart: typeof import("../node_modules/lucide-vue-next")['PieChart']
export const LucidePiggyBank: typeof import("../node_modules/lucide-vue-next")['PiggyBank']
export const LucidePilcrow: typeof import("../node_modules/lucide-vue-next")['Pilcrow']
export const LucidePilcrowLeft: typeof import("../node_modules/lucide-vue-next")['PilcrowLeft']
export const LucidePilcrowRight: typeof import("../node_modules/lucide-vue-next")['PilcrowRight']
export const LucidePilcrowSquare: typeof import("../node_modules/lucide-vue-next")['PilcrowSquare']
export const LucidePill: typeof import("../node_modules/lucide-vue-next")['Pill']
export const LucidePillBottle: typeof import("../node_modules/lucide-vue-next")['PillBottle']
export const LucidePin: typeof import("../node_modules/lucide-vue-next")['Pin']
export const LucidePinOff: typeof import("../node_modules/lucide-vue-next")['PinOff']
export const LucidePipette: typeof import("../node_modules/lucide-vue-next")['Pipette']
export const LucidePizza: typeof import("../node_modules/lucide-vue-next")['Pizza']
export const LucidePlane: typeof import("../node_modules/lucide-vue-next")['Plane']
export const LucidePlaneLanding: typeof import("../node_modules/lucide-vue-next")['PlaneLanding']
export const LucidePlaneTakeoff: typeof import("../node_modules/lucide-vue-next")['PlaneTakeoff']
export const LucidePlay: typeof import("../node_modules/lucide-vue-next")['Play']
export const LucidePlayCircle: typeof import("../node_modules/lucide-vue-next")['PlayCircle']
export const LucidePlaySquare: typeof import("../node_modules/lucide-vue-next")['PlaySquare']
export const LucidePlug: typeof import("../node_modules/lucide-vue-next")['Plug']
export const LucidePlug2: typeof import("../node_modules/lucide-vue-next")['Plug2']
export const LucidePlugZap: typeof import("../node_modules/lucide-vue-next")['PlugZap']
export const LucidePlugZap2: typeof import("../node_modules/lucide-vue-next")['PlugZap2']
export const LucidePlus: typeof import("../node_modules/lucide-vue-next")['Plus']
export const LucidePlusCircle: typeof import("../node_modules/lucide-vue-next")['PlusCircle']
export const LucidePlusSquare: typeof import("../node_modules/lucide-vue-next")['PlusSquare']
export const LucidePocket: typeof import("../node_modules/lucide-vue-next")['Pocket']
export const LucidePocketKnife: typeof import("../node_modules/lucide-vue-next")['PocketKnife']
export const LucidePodcast: typeof import("../node_modules/lucide-vue-next")['Podcast']
export const LucidePointer: typeof import("../node_modules/lucide-vue-next")['Pointer']
export const LucidePointerOff: typeof import("../node_modules/lucide-vue-next")['PointerOff']
export const LucidePopcorn: typeof import("../node_modules/lucide-vue-next")['Popcorn']
export const LucidePopsicle: typeof import("../node_modules/lucide-vue-next")['Popsicle']
export const LucidePoundSterling: typeof import("../node_modules/lucide-vue-next")['PoundSterling']
export const LucidePower: typeof import("../node_modules/lucide-vue-next")['Power']
export const LucidePowerCircle: typeof import("../node_modules/lucide-vue-next")['PowerCircle']
export const LucidePowerOff: typeof import("../node_modules/lucide-vue-next")['PowerOff']
export const LucidePowerSquare: typeof import("../node_modules/lucide-vue-next")['PowerSquare']
export const LucidePresentation: typeof import("../node_modules/lucide-vue-next")['Presentation']
export const LucidePrinter: typeof import("../node_modules/lucide-vue-next")['Printer']
export const LucidePrinterCheck: typeof import("../node_modules/lucide-vue-next")['PrinterCheck']
export const LucideProjector: typeof import("../node_modules/lucide-vue-next")['Projector']
export const LucideProportions: typeof import("../node_modules/lucide-vue-next")['Proportions']
export const LucidePuzzle: typeof import("../node_modules/lucide-vue-next")['Puzzle']
export const LucidePyramid: typeof import("../node_modules/lucide-vue-next")['Pyramid']
export const LucideQrCode: typeof import("../node_modules/lucide-vue-next")['QrCode']
export const LucideQuote: typeof import("../node_modules/lucide-vue-next")['Quote']
export const LucideRabbit: typeof import("../node_modules/lucide-vue-next")['Rabbit']
export const LucideRadar: typeof import("../node_modules/lucide-vue-next")['Radar']
export const LucideRadiation: typeof import("../node_modules/lucide-vue-next")['Radiation']
export const LucideRadical: typeof import("../node_modules/lucide-vue-next")['Radical']
export const LucideRadio: typeof import("../node_modules/lucide-vue-next")['Radio']
export const LucideRadioReceiver: typeof import("../node_modules/lucide-vue-next")['RadioReceiver']
export const LucideRadioTower: typeof import("../node_modules/lucide-vue-next")['RadioTower']
export const LucideRadius: typeof import("../node_modules/lucide-vue-next")['Radius']
export const LucideRailSymbol: typeof import("../node_modules/lucide-vue-next")['RailSymbol']
export const LucideRainbow: typeof import("../node_modules/lucide-vue-next")['Rainbow']
export const LucideRat: typeof import("../node_modules/lucide-vue-next")['Rat']
export const LucideRatio: typeof import("../node_modules/lucide-vue-next")['Ratio']
export const LucideReceipt: typeof import("../node_modules/lucide-vue-next")['Receipt']
export const LucideReceiptCent: typeof import("../node_modules/lucide-vue-next")['ReceiptCent']
export const LucideReceiptEuro: typeof import("../node_modules/lucide-vue-next")['ReceiptEuro']
export const LucideReceiptIndianRupee: typeof import("../node_modules/lucide-vue-next")['ReceiptIndianRupee']
export const LucideReceiptJapaneseYen: typeof import("../node_modules/lucide-vue-next")['ReceiptJapaneseYen']
export const LucideReceiptPoundSterling: typeof import("../node_modules/lucide-vue-next")['ReceiptPoundSterling']
export const LucideReceiptRussianRuble: typeof import("../node_modules/lucide-vue-next")['ReceiptRussianRuble']
export const LucideReceiptSwissFranc: typeof import("../node_modules/lucide-vue-next")['ReceiptSwissFranc']
export const LucideReceiptText: typeof import("../node_modules/lucide-vue-next")['ReceiptText']
export const LucideRectangleEllipsis: typeof import("../node_modules/lucide-vue-next")['RectangleEllipsis']
export const LucideRectangleHorizontal: typeof import("../node_modules/lucide-vue-next")['RectangleHorizontal']
export const LucideRectangleVertical: typeof import("../node_modules/lucide-vue-next")['RectangleVertical']
export const LucideRecycle: typeof import("../node_modules/lucide-vue-next")['Recycle']
export const LucideRedo: typeof import("../node_modules/lucide-vue-next")['Redo']
export const LucideRedo2: typeof import("../node_modules/lucide-vue-next")['Redo2']
export const LucideRedoDot: typeof import("../node_modules/lucide-vue-next")['RedoDot']
export const LucideRefreshCcw: typeof import("../node_modules/lucide-vue-next")['RefreshCcw']
export const LucideRefreshCcwDot: typeof import("../node_modules/lucide-vue-next")['RefreshCcwDot']
export const LucideRefreshCw: typeof import("../node_modules/lucide-vue-next")['RefreshCw']
export const LucideRefreshCwOff: typeof import("../node_modules/lucide-vue-next")['RefreshCwOff']
export const LucideRefrigerator: typeof import("../node_modules/lucide-vue-next")['Refrigerator']
export const LucideRegex: typeof import("../node_modules/lucide-vue-next")['Regex']
export const LucideRemoveFormatting: typeof import("../node_modules/lucide-vue-next")['RemoveFormatting']
export const LucideRepeat: typeof import("../node_modules/lucide-vue-next")['Repeat']
export const LucideRepeat1: typeof import("../node_modules/lucide-vue-next")['Repeat1']
export const LucideRepeat2: typeof import("../node_modules/lucide-vue-next")['Repeat2']
export const LucideReplace: typeof import("../node_modules/lucide-vue-next")['Replace']
export const LucideReplaceAll: typeof import("../node_modules/lucide-vue-next")['ReplaceAll']
export const LucideReply: typeof import("../node_modules/lucide-vue-next")['Reply']
export const LucideReplyAll: typeof import("../node_modules/lucide-vue-next")['ReplyAll']
export const LucideRewind: typeof import("../node_modules/lucide-vue-next")['Rewind']
export const LucideRibbon: typeof import("../node_modules/lucide-vue-next")['Ribbon']
export const LucideRocket: typeof import("../node_modules/lucide-vue-next")['Rocket']
export const LucideRockingChair: typeof import("../node_modules/lucide-vue-next")['RockingChair']
export const LucideRollerCoaster: typeof import("../node_modules/lucide-vue-next")['RollerCoaster']
export const LucideRotate3d: typeof import("../node_modules/lucide-vue-next")['Rotate3d']
export const LucideRotateCcw: typeof import("../node_modules/lucide-vue-next")['RotateCcw']
export const LucideRotateCcwSquare: typeof import("../node_modules/lucide-vue-next")['RotateCcwSquare']
export const LucideRotateCw: typeof import("../node_modules/lucide-vue-next")['RotateCw']
export const LucideRotateCwSquare: typeof import("../node_modules/lucide-vue-next")['RotateCwSquare']
export const LucideRoute: typeof import("../node_modules/lucide-vue-next")['Route']
export const LucideRouteOff: typeof import("../node_modules/lucide-vue-next")['RouteOff']
export const LucideRouter: typeof import("../node_modules/lucide-vue-next")['Router']
export const LucideRows: typeof import("../node_modules/lucide-vue-next")['Rows']
export const LucideRows2: typeof import("../node_modules/lucide-vue-next")['Rows2']
export const LucideRows3: typeof import("../node_modules/lucide-vue-next")['Rows3']
export const LucideRows4: typeof import("../node_modules/lucide-vue-next")['Rows4']
export const LucideRss: typeof import("../node_modules/lucide-vue-next")['Rss']
export const LucideRuler: typeof import("../node_modules/lucide-vue-next")['Ruler']
export const LucideRussianRuble: typeof import("../node_modules/lucide-vue-next")['RussianRuble']
export const LucideSailboat: typeof import("../node_modules/lucide-vue-next")['Sailboat']
export const LucideSalad: typeof import("../node_modules/lucide-vue-next")['Salad']
export const LucideSandwich: typeof import("../node_modules/lucide-vue-next")['Sandwich']
export const LucideSatellite: typeof import("../node_modules/lucide-vue-next")['Satellite']
export const LucideSatelliteDish: typeof import("../node_modules/lucide-vue-next")['SatelliteDish']
export const LucideSaudiRiyal: typeof import("../node_modules/lucide-vue-next")['SaudiRiyal']
export const LucideSave: typeof import("../node_modules/lucide-vue-next")['Save']
export const LucideSaveAll: typeof import("../node_modules/lucide-vue-next")['SaveAll']
export const LucideSaveOff: typeof import("../node_modules/lucide-vue-next")['SaveOff']
export const LucideScale: typeof import("../node_modules/lucide-vue-next")['Scale']
export const LucideScale3d: typeof import("../node_modules/lucide-vue-next")['Scale3d']
export const LucideScaling: typeof import("../node_modules/lucide-vue-next")['Scaling']
export const LucideScan: typeof import("../node_modules/lucide-vue-next")['Scan']
export const LucideScanBarcode: typeof import("../node_modules/lucide-vue-next")['ScanBarcode']
export const LucideScanEye: typeof import("../node_modules/lucide-vue-next")['ScanEye']
export const LucideScanFace: typeof import("../node_modules/lucide-vue-next")['ScanFace']
export const LucideScanHeart: typeof import("../node_modules/lucide-vue-next")['ScanHeart']
export const LucideScanLine: typeof import("../node_modules/lucide-vue-next")['ScanLine']
export const LucideScanQrCode: typeof import("../node_modules/lucide-vue-next")['ScanQrCode']
export const LucideScanSearch: typeof import("../node_modules/lucide-vue-next")['ScanSearch']
export const LucideScanText: typeof import("../node_modules/lucide-vue-next")['ScanText']
export const LucideScatterChart: typeof import("../node_modules/lucide-vue-next")['ScatterChart']
export const LucideSchool: typeof import("../node_modules/lucide-vue-next")['School']
export const LucideSchool2: typeof import("../node_modules/lucide-vue-next")['School2']
export const LucideScissors: typeof import("../node_modules/lucide-vue-next")['Scissors']
export const LucideScissorsLineDashed: typeof import("../node_modules/lucide-vue-next")['ScissorsLineDashed']
export const LucideScissorsSquare: typeof import("../node_modules/lucide-vue-next")['ScissorsSquare']
export const LucideScissorsSquareDashedBottom: typeof import("../node_modules/lucide-vue-next")['ScissorsSquareDashedBottom']
export const LucideScreenShare: typeof import("../node_modules/lucide-vue-next")['ScreenShare']
export const LucideScreenShareOff: typeof import("../node_modules/lucide-vue-next")['ScreenShareOff']
export const LucideScroll: typeof import("../node_modules/lucide-vue-next")['Scroll']
export const LucideScrollText: typeof import("../node_modules/lucide-vue-next")['ScrollText']
export const LucideSearch: typeof import("../node_modules/lucide-vue-next")['Search']
export const LucideSearchCheck: typeof import("../node_modules/lucide-vue-next")['SearchCheck']
export const LucideSearchCode: typeof import("../node_modules/lucide-vue-next")['SearchCode']
export const LucideSearchSlash: typeof import("../node_modules/lucide-vue-next")['SearchSlash']
export const LucideSearchX: typeof import("../node_modules/lucide-vue-next")['SearchX']
export const LucideSection: typeof import("../node_modules/lucide-vue-next")['Section']
export const LucideSend: typeof import("../node_modules/lucide-vue-next")['Send']
export const LucideSendHorizonal: typeof import("../node_modules/lucide-vue-next")['SendHorizonal']
export const LucideSendHorizontal: typeof import("../node_modules/lucide-vue-next")['SendHorizontal']
export const LucideSendToBack: typeof import("../node_modules/lucide-vue-next")['SendToBack']
export const LucideSeparatorHorizontal: typeof import("../node_modules/lucide-vue-next")['SeparatorHorizontal']
export const LucideSeparatorVertical: typeof import("../node_modules/lucide-vue-next")['SeparatorVertical']
export const LucideServer: typeof import("../node_modules/lucide-vue-next")['Server']
export const LucideServerCog: typeof import("../node_modules/lucide-vue-next")['ServerCog']
export const LucideServerCrash: typeof import("../node_modules/lucide-vue-next")['ServerCrash']
export const LucideServerOff: typeof import("../node_modules/lucide-vue-next")['ServerOff']
export const LucideSettings: typeof import("../node_modules/lucide-vue-next")['Settings']
export const LucideSettings2: typeof import("../node_modules/lucide-vue-next")['Settings2']
export const LucideShapes: typeof import("../node_modules/lucide-vue-next")['Shapes']
export const LucideShare: typeof import("../node_modules/lucide-vue-next")['Share']
export const LucideShare2: typeof import("../node_modules/lucide-vue-next")['Share2']
export const LucideSheet: typeof import("../node_modules/lucide-vue-next")['Sheet']
export const LucideShell: typeof import("../node_modules/lucide-vue-next")['Shell']
export const LucideShield: typeof import("../node_modules/lucide-vue-next")['Shield']
export const LucideShieldAlert: typeof import("../node_modules/lucide-vue-next")['ShieldAlert']
export const LucideShieldBan: typeof import("../node_modules/lucide-vue-next")['ShieldBan']
export const LucideShieldCheck: typeof import("../node_modules/lucide-vue-next")['ShieldCheck']
export const LucideShieldClose: typeof import("../node_modules/lucide-vue-next")['ShieldClose']
export const LucideShieldEllipsis: typeof import("../node_modules/lucide-vue-next")['ShieldEllipsis']
export const LucideShieldHalf: typeof import("../node_modules/lucide-vue-next")['ShieldHalf']
export const LucideShieldMinus: typeof import("../node_modules/lucide-vue-next")['ShieldMinus']
export const LucideShieldOff: typeof import("../node_modules/lucide-vue-next")['ShieldOff']
export const LucideShieldPlus: typeof import("../node_modules/lucide-vue-next")['ShieldPlus']
export const LucideShieldQuestion: typeof import("../node_modules/lucide-vue-next")['ShieldQuestion']
export const LucideShieldUser: typeof import("../node_modules/lucide-vue-next")['ShieldUser']
export const LucideShieldX: typeof import("../node_modules/lucide-vue-next")['ShieldX']
export const LucideShip: typeof import("../node_modules/lucide-vue-next")['Ship']
export const LucideShipWheel: typeof import("../node_modules/lucide-vue-next")['ShipWheel']
export const LucideShirt: typeof import("../node_modules/lucide-vue-next")['Shirt']
export const LucideShoppingBag: typeof import("../node_modules/lucide-vue-next")['ShoppingBag']
export const LucideShoppingBasket: typeof import("../node_modules/lucide-vue-next")['ShoppingBasket']
export const LucideShoppingCart: typeof import("../node_modules/lucide-vue-next")['ShoppingCart']
export const LucideShovel: typeof import("../node_modules/lucide-vue-next")['Shovel']
export const LucideShowerHead: typeof import("../node_modules/lucide-vue-next")['ShowerHead']
export const LucideShrimp: typeof import("../node_modules/lucide-vue-next")['Shrimp']
export const LucideShrink: typeof import("../node_modules/lucide-vue-next")['Shrink']
export const LucideShrub: typeof import("../node_modules/lucide-vue-next")['Shrub']
export const LucideShuffle: typeof import("../node_modules/lucide-vue-next")['Shuffle']
export const LucideSidebar: typeof import("../node_modules/lucide-vue-next")['Sidebar']
export const LucideSidebarClose: typeof import("../node_modules/lucide-vue-next")['SidebarClose']
export const LucideSidebarOpen: typeof import("../node_modules/lucide-vue-next")['SidebarOpen']
export const LucideSigma: typeof import("../node_modules/lucide-vue-next")['Sigma']
export const LucideSigmaSquare: typeof import("../node_modules/lucide-vue-next")['SigmaSquare']
export const LucideSignal: typeof import("../node_modules/lucide-vue-next")['Signal']
export const LucideSignalHigh: typeof import("../node_modules/lucide-vue-next")['SignalHigh']
export const LucideSignalLow: typeof import("../node_modules/lucide-vue-next")['SignalLow']
export const LucideSignalMedium: typeof import("../node_modules/lucide-vue-next")['SignalMedium']
export const LucideSignalZero: typeof import("../node_modules/lucide-vue-next")['SignalZero']
export const LucideSignature: typeof import("../node_modules/lucide-vue-next")['Signature']
export const LucideSignpost: typeof import("../node_modules/lucide-vue-next")['Signpost']
export const LucideSignpostBig: typeof import("../node_modules/lucide-vue-next")['SignpostBig']
export const LucideSiren: typeof import("../node_modules/lucide-vue-next")['Siren']
export const LucideSkipBack: typeof import("../node_modules/lucide-vue-next")['SkipBack']
export const LucideSkipForward: typeof import("../node_modules/lucide-vue-next")['SkipForward']
export const LucideSkull: typeof import("../node_modules/lucide-vue-next")['Skull']
export const LucideSlack: typeof import("../node_modules/lucide-vue-next")['Slack']
export const LucideSlash: typeof import("../node_modules/lucide-vue-next")['Slash']
export const LucideSlashSquare: typeof import("../node_modules/lucide-vue-next")['SlashSquare']
export const LucideSlice: typeof import("../node_modules/lucide-vue-next")['Slice']
export const LucideSliders: typeof import("../node_modules/lucide-vue-next")['Sliders']
export const LucideSlidersHorizontal: typeof import("../node_modules/lucide-vue-next")['SlidersHorizontal']
export const LucideSlidersVertical: typeof import("../node_modules/lucide-vue-next")['SlidersVertical']
export const LucideSmartphone: typeof import("../node_modules/lucide-vue-next")['Smartphone']
export const LucideSmartphoneCharging: typeof import("../node_modules/lucide-vue-next")['SmartphoneCharging']
export const LucideSmartphoneNfc: typeof import("../node_modules/lucide-vue-next")['SmartphoneNfc']
export const LucideSmile: typeof import("../node_modules/lucide-vue-next")['Smile']
export const LucideSmilePlus: typeof import("../node_modules/lucide-vue-next")['SmilePlus']
export const LucideSnail: typeof import("../node_modules/lucide-vue-next")['Snail']
export const LucideSnowflake: typeof import("../node_modules/lucide-vue-next")['Snowflake']
export const LucideSofa: typeof import("../node_modules/lucide-vue-next")['Sofa']
export const LucideSortAsc: typeof import("../node_modules/lucide-vue-next")['SortAsc']
export const LucideSortDesc: typeof import("../node_modules/lucide-vue-next")['SortDesc']
export const LucideSoup: typeof import("../node_modules/lucide-vue-next")['Soup']
export const LucideSpace: typeof import("../node_modules/lucide-vue-next")['Space']
export const LucideSpade: typeof import("../node_modules/lucide-vue-next")['Spade']
export const LucideSparkle: typeof import("../node_modules/lucide-vue-next")['Sparkle']
export const LucideSparkles: typeof import("../node_modules/lucide-vue-next")['Sparkles']
export const LucideSpeaker: typeof import("../node_modules/lucide-vue-next")['Speaker']
export const LucideSpeech: typeof import("../node_modules/lucide-vue-next")['Speech']
export const LucideSpellCheck: typeof import("../node_modules/lucide-vue-next")['SpellCheck']
export const LucideSpellCheck2: typeof import("../node_modules/lucide-vue-next")['SpellCheck2']
export const LucideSpline: typeof import("../node_modules/lucide-vue-next")['Spline']
export const LucideSplinePointer: typeof import("../node_modules/lucide-vue-next")['SplinePointer']
export const LucideSplit: typeof import("../node_modules/lucide-vue-next")['Split']
export const LucideSplitSquareHorizontal: typeof import("../node_modules/lucide-vue-next")['SplitSquareHorizontal']
export const LucideSplitSquareVertical: typeof import("../node_modules/lucide-vue-next")['SplitSquareVertical']
export const LucideSprayCan: typeof import("../node_modules/lucide-vue-next")['SprayCan']
export const LucideSprout: typeof import("../node_modules/lucide-vue-next")['Sprout']
export const LucideSquare: typeof import("../node_modules/lucide-vue-next")['Square']
export const LucideSquareActivity: typeof import("../node_modules/lucide-vue-next")['SquareActivity']
export const LucideSquareArrowDown: typeof import("../node_modules/lucide-vue-next")['SquareArrowDown']
export const LucideSquareArrowDownLeft: typeof import("../node_modules/lucide-vue-next")['SquareArrowDownLeft']
export const LucideSquareArrowDownRight: typeof import("../node_modules/lucide-vue-next")['SquareArrowDownRight']
export const LucideSquareArrowLeft: typeof import("../node_modules/lucide-vue-next")['SquareArrowLeft']
export const LucideSquareArrowOutDownLeft: typeof import("../node_modules/lucide-vue-next")['SquareArrowOutDownLeft']
export const LucideSquareArrowOutDownRight: typeof import("../node_modules/lucide-vue-next")['SquareArrowOutDownRight']
export const LucideSquareArrowOutUpLeft: typeof import("../node_modules/lucide-vue-next")['SquareArrowOutUpLeft']
export const LucideSquareArrowOutUpRight: typeof import("../node_modules/lucide-vue-next")['SquareArrowOutUpRight']
export const LucideSquareArrowRight: typeof import("../node_modules/lucide-vue-next")['SquareArrowRight']
export const LucideSquareArrowUp: typeof import("../node_modules/lucide-vue-next")['SquareArrowUp']
export const LucideSquareArrowUpLeft: typeof import("../node_modules/lucide-vue-next")['SquareArrowUpLeft']
export const LucideSquareArrowUpRight: typeof import("../node_modules/lucide-vue-next")['SquareArrowUpRight']
export const LucideSquareAsterisk: typeof import("../node_modules/lucide-vue-next")['SquareAsterisk']
export const LucideSquareBottomDashedScissors: typeof import("../node_modules/lucide-vue-next")['SquareBottomDashedScissors']
export const LucideSquareChartGantt: typeof import("../node_modules/lucide-vue-next")['SquareChartGantt']
export const LucideSquareCheck: typeof import("../node_modules/lucide-vue-next")['SquareCheck']
export const LucideSquareCheckBig: typeof import("../node_modules/lucide-vue-next")['SquareCheckBig']
export const LucideSquareChevronDown: typeof import("../node_modules/lucide-vue-next")['SquareChevronDown']
export const LucideSquareChevronLeft: typeof import("../node_modules/lucide-vue-next")['SquareChevronLeft']
export const LucideSquareChevronRight: typeof import("../node_modules/lucide-vue-next")['SquareChevronRight']
export const LucideSquareChevronUp: typeof import("../node_modules/lucide-vue-next")['SquareChevronUp']
export const LucideSquareCode: typeof import("../node_modules/lucide-vue-next")['SquareCode']
export const LucideSquareDashed: typeof import("../node_modules/lucide-vue-next")['SquareDashed']
export const LucideSquareDashedBottom: typeof import("../node_modules/lucide-vue-next")['SquareDashedBottom']
export const LucideSquareDashedBottomCode: typeof import("../node_modules/lucide-vue-next")['SquareDashedBottomCode']
export const LucideSquareDashedKanban: typeof import("../node_modules/lucide-vue-next")['SquareDashedKanban']
export const LucideSquareDashedMousePointer: typeof import("../node_modules/lucide-vue-next")['SquareDashedMousePointer']
export const LucideSquareDivide: typeof import("../node_modules/lucide-vue-next")['SquareDivide']
export const LucideSquareDot: typeof import("../node_modules/lucide-vue-next")['SquareDot']
export const LucideSquareEqual: typeof import("../node_modules/lucide-vue-next")['SquareEqual']
export const LucideSquareFunction: typeof import("../node_modules/lucide-vue-next")['SquareFunction']
export const LucideSquareGanttChart: typeof import("../node_modules/lucide-vue-next")['SquareGanttChart']
export const LucideSquareKanban: typeof import("../node_modules/lucide-vue-next")['SquareKanban']
export const LucideSquareLibrary: typeof import("../node_modules/lucide-vue-next")['SquareLibrary']
export const LucideSquareM: typeof import("../node_modules/lucide-vue-next")['SquareM']
export const LucideSquareMenu: typeof import("../node_modules/lucide-vue-next")['SquareMenu']
export const LucideSquareMinus: typeof import("../node_modules/lucide-vue-next")['SquareMinus']
export const LucideSquareMousePointer: typeof import("../node_modules/lucide-vue-next")['SquareMousePointer']
export const LucideSquareParking: typeof import("../node_modules/lucide-vue-next")['SquareParking']
export const LucideSquareParkingOff: typeof import("../node_modules/lucide-vue-next")['SquareParkingOff']
export const LucideSquarePen: typeof import("../node_modules/lucide-vue-next")['SquarePen']
export const LucideSquarePercent: typeof import("../node_modules/lucide-vue-next")['SquarePercent']
export const LucideSquarePi: typeof import("../node_modules/lucide-vue-next")['SquarePi']
export const LucideSquarePilcrow: typeof import("../node_modules/lucide-vue-next")['SquarePilcrow']
export const LucideSquarePlay: typeof import("../node_modules/lucide-vue-next")['SquarePlay']
export const LucideSquarePlus: typeof import("../node_modules/lucide-vue-next")['SquarePlus']
export const LucideSquarePower: typeof import("../node_modules/lucide-vue-next")['SquarePower']
export const LucideSquareRadical: typeof import("../node_modules/lucide-vue-next")['SquareRadical']
export const LucideSquareRoundCorner: typeof import("../node_modules/lucide-vue-next")['SquareRoundCorner']
export const LucideSquareScissors: typeof import("../node_modules/lucide-vue-next")['SquareScissors']
export const LucideSquareSigma: typeof import("../node_modules/lucide-vue-next")['SquareSigma']
export const LucideSquareSlash: typeof import("../node_modules/lucide-vue-next")['SquareSlash']
export const LucideSquareSplitHorizontal: typeof import("../node_modules/lucide-vue-next")['SquareSplitHorizontal']
export const LucideSquareSplitVertical: typeof import("../node_modules/lucide-vue-next")['SquareSplitVertical']
export const LucideSquareSquare: typeof import("../node_modules/lucide-vue-next")['SquareSquare']
export const LucideSquareStack: typeof import("../node_modules/lucide-vue-next")['SquareStack']
export const LucideSquareTerminal: typeof import("../node_modules/lucide-vue-next")['SquareTerminal']
export const LucideSquareUser: typeof import("../node_modules/lucide-vue-next")['SquareUser']
export const LucideSquareUserRound: typeof import("../node_modules/lucide-vue-next")['SquareUserRound']
export const LucideSquareX: typeof import("../node_modules/lucide-vue-next")['SquareX']
export const LucideSquircle: typeof import("../node_modules/lucide-vue-next")['Squircle']
export const LucideSquirrel: typeof import("../node_modules/lucide-vue-next")['Squirrel']
export const LucideStamp: typeof import("../node_modules/lucide-vue-next")['Stamp']
export const LucideStar: typeof import("../node_modules/lucide-vue-next")['Star']
export const LucideStarHalf: typeof import("../node_modules/lucide-vue-next")['StarHalf']
export const LucideStarOff: typeof import("../node_modules/lucide-vue-next")['StarOff']
export const LucideStars: typeof import("../node_modules/lucide-vue-next")['Stars']
export const LucideStepBack: typeof import("../node_modules/lucide-vue-next")['StepBack']
export const LucideStepForward: typeof import("../node_modules/lucide-vue-next")['StepForward']
export const LucideStethoscope: typeof import("../node_modules/lucide-vue-next")['Stethoscope']
export const LucideSticker: typeof import("../node_modules/lucide-vue-next")['Sticker']
export const LucideStickyNote: typeof import("../node_modules/lucide-vue-next")['StickyNote']
export const LucideStopCircle: typeof import("../node_modules/lucide-vue-next")['StopCircle']
export const LucideStore: typeof import("../node_modules/lucide-vue-next")['Store']
export const LucideStretchHorizontal: typeof import("../node_modules/lucide-vue-next")['StretchHorizontal']
export const LucideStretchVertical: typeof import("../node_modules/lucide-vue-next")['StretchVertical']
export const LucideStrikethrough: typeof import("../node_modules/lucide-vue-next")['Strikethrough']
export const LucideSubscript: typeof import("../node_modules/lucide-vue-next")['Subscript']
export const LucideSubtitles: typeof import("../node_modules/lucide-vue-next")['Subtitles']
export const LucideSun: typeof import("../node_modules/lucide-vue-next")['Sun']
export const LucideSunDim: typeof import("../node_modules/lucide-vue-next")['SunDim']
export const LucideSunMedium: typeof import("../node_modules/lucide-vue-next")['SunMedium']
export const LucideSunMoon: typeof import("../node_modules/lucide-vue-next")['SunMoon']
export const LucideSunSnow: typeof import("../node_modules/lucide-vue-next")['SunSnow']
export const LucideSunrise: typeof import("../node_modules/lucide-vue-next")['Sunrise']
export const LucideSunset: typeof import("../node_modules/lucide-vue-next")['Sunset']
export const LucideSuperscript: typeof import("../node_modules/lucide-vue-next")['Superscript']
export const LucideSwatchBook: typeof import("../node_modules/lucide-vue-next")['SwatchBook']
export const LucideSwissFranc: typeof import("../node_modules/lucide-vue-next")['SwissFranc']
export const LucideSwitchCamera: typeof import("../node_modules/lucide-vue-next")['SwitchCamera']
export const LucideSword: typeof import("../node_modules/lucide-vue-next")['Sword']
export const LucideSwords: typeof import("../node_modules/lucide-vue-next")['Swords']
export const LucideSyringe: typeof import("../node_modules/lucide-vue-next")['Syringe']
export const LucideTable: typeof import("../node_modules/lucide-vue-next")['Table']
export const LucideTable2: typeof import("../node_modules/lucide-vue-next")['Table2']
export const LucideTableCellsMerge: typeof import("../node_modules/lucide-vue-next")['TableCellsMerge']
export const LucideTableCellsSplit: typeof import("../node_modules/lucide-vue-next")['TableCellsSplit']
export const LucideTableColumnsSplit: typeof import("../node_modules/lucide-vue-next")['TableColumnsSplit']
export const LucideTableOfContents: typeof import("../node_modules/lucide-vue-next")['TableOfContents']
export const LucideTableProperties: typeof import("../node_modules/lucide-vue-next")['TableProperties']
export const LucideTableRowsSplit: typeof import("../node_modules/lucide-vue-next")['TableRowsSplit']
export const LucideTablet: typeof import("../node_modules/lucide-vue-next")['Tablet']
export const LucideTabletSmartphone: typeof import("../node_modules/lucide-vue-next")['TabletSmartphone']
export const LucideTablets: typeof import("../node_modules/lucide-vue-next")['Tablets']
export const LucideTag: typeof import("../node_modules/lucide-vue-next")['Tag']
export const LucideTags: typeof import("../node_modules/lucide-vue-next")['Tags']
export const LucideTally1: typeof import("../node_modules/lucide-vue-next")['Tally1']
export const LucideTally2: typeof import("../node_modules/lucide-vue-next")['Tally2']
export const LucideTally3: typeof import("../node_modules/lucide-vue-next")['Tally3']
export const LucideTally4: typeof import("../node_modules/lucide-vue-next")['Tally4']
export const LucideTally5: typeof import("../node_modules/lucide-vue-next")['Tally5']
export const LucideTangent: typeof import("../node_modules/lucide-vue-next")['Tangent']
export const LucideTarget: typeof import("../node_modules/lucide-vue-next")['Target']
export const LucideTelescope: typeof import("../node_modules/lucide-vue-next")['Telescope']
export const LucideTent: typeof import("../node_modules/lucide-vue-next")['Tent']
export const LucideTentTree: typeof import("../node_modules/lucide-vue-next")['TentTree']
export const LucideTerminal: typeof import("../node_modules/lucide-vue-next")['Terminal']
export const LucideTerminalSquare: typeof import("../node_modules/lucide-vue-next")['TerminalSquare']
export const LucideTestTube: typeof import("../node_modules/lucide-vue-next")['TestTube']
export const LucideTestTube2: typeof import("../node_modules/lucide-vue-next")['TestTube2']
export const LucideTestTubeDiagonal: typeof import("../node_modules/lucide-vue-next")['TestTubeDiagonal']
export const LucideTestTubes: typeof import("../node_modules/lucide-vue-next")['TestTubes']
export const LucideText: typeof import("../node_modules/lucide-vue-next")['Text']
export const LucideTextCursor: typeof import("../node_modules/lucide-vue-next")['TextCursor']
export const LucideTextCursorInput: typeof import("../node_modules/lucide-vue-next")['TextCursorInput']
export const LucideTextQuote: typeof import("../node_modules/lucide-vue-next")['TextQuote']
export const LucideTextSearch: typeof import("../node_modules/lucide-vue-next")['TextSearch']
export const LucideTextSelect: typeof import("../node_modules/lucide-vue-next")['TextSelect']
export const LucideTextSelection: typeof import("../node_modules/lucide-vue-next")['TextSelection']
export const LucideTheater: typeof import("../node_modules/lucide-vue-next")['Theater']
export const LucideThermometer: typeof import("../node_modules/lucide-vue-next")['Thermometer']
export const LucideThermometerSnowflake: typeof import("../node_modules/lucide-vue-next")['ThermometerSnowflake']
export const LucideThermometerSun: typeof import("../node_modules/lucide-vue-next")['ThermometerSun']
export const LucideThumbsDown: typeof import("../node_modules/lucide-vue-next")['ThumbsDown']
export const LucideThumbsUp: typeof import("../node_modules/lucide-vue-next")['ThumbsUp']
export const LucideTicket: typeof import("../node_modules/lucide-vue-next")['Ticket']
export const LucideTicketCheck: typeof import("../node_modules/lucide-vue-next")['TicketCheck']
export const LucideTicketMinus: typeof import("../node_modules/lucide-vue-next")['TicketMinus']
export const LucideTicketPercent: typeof import("../node_modules/lucide-vue-next")['TicketPercent']
export const LucideTicketPlus: typeof import("../node_modules/lucide-vue-next")['TicketPlus']
export const LucideTicketSlash: typeof import("../node_modules/lucide-vue-next")['TicketSlash']
export const LucideTicketX: typeof import("../node_modules/lucide-vue-next")['TicketX']
export const LucideTickets: typeof import("../node_modules/lucide-vue-next")['Tickets']
export const LucideTicketsPlane: typeof import("../node_modules/lucide-vue-next")['TicketsPlane']
export const LucideTimer: typeof import("../node_modules/lucide-vue-next")['Timer']
export const LucideTimerOff: typeof import("../node_modules/lucide-vue-next")['TimerOff']
export const LucideTimerReset: typeof import("../node_modules/lucide-vue-next")['TimerReset']
export const LucideToggleLeft: typeof import("../node_modules/lucide-vue-next")['ToggleLeft']
export const LucideToggleRight: typeof import("../node_modules/lucide-vue-next")['ToggleRight']
export const LucideToilet: typeof import("../node_modules/lucide-vue-next")['Toilet']
export const LucideTornado: typeof import("../node_modules/lucide-vue-next")['Tornado']
export const LucideTorus: typeof import("../node_modules/lucide-vue-next")['Torus']
export const LucideTouchpad: typeof import("../node_modules/lucide-vue-next")['Touchpad']
export const LucideTouchpadOff: typeof import("../node_modules/lucide-vue-next")['TouchpadOff']
export const LucideTowerControl: typeof import("../node_modules/lucide-vue-next")['TowerControl']
export const LucideToyBrick: typeof import("../node_modules/lucide-vue-next")['ToyBrick']
export const LucideTractor: typeof import("../node_modules/lucide-vue-next")['Tractor']
export const LucideTrafficCone: typeof import("../node_modules/lucide-vue-next")['TrafficCone']
export const LucideTrain: typeof import("../node_modules/lucide-vue-next")['Train']
export const LucideTrainFront: typeof import("../node_modules/lucide-vue-next")['TrainFront']
export const LucideTrainFrontTunnel: typeof import("../node_modules/lucide-vue-next")['TrainFrontTunnel']
export const LucideTrainTrack: typeof import("../node_modules/lucide-vue-next")['TrainTrack']
export const LucideTramFront: typeof import("../node_modules/lucide-vue-next")['TramFront']
export const LucideTransgender: typeof import("../node_modules/lucide-vue-next")['Transgender']
export const LucideTrash: typeof import("../node_modules/lucide-vue-next")['Trash']
export const LucideTrash2: typeof import("../node_modules/lucide-vue-next")['Trash2']
export const LucideTreeDeciduous: typeof import("../node_modules/lucide-vue-next")['TreeDeciduous']
export const LucideTreePalm: typeof import("../node_modules/lucide-vue-next")['TreePalm']
export const LucideTreePine: typeof import("../node_modules/lucide-vue-next")['TreePine']
export const LucideTrees: typeof import("../node_modules/lucide-vue-next")['Trees']
export const LucideTrello: typeof import("../node_modules/lucide-vue-next")['Trello']
export const LucideTrendingDown: typeof import("../node_modules/lucide-vue-next")['TrendingDown']
export const LucideTrendingUp: typeof import("../node_modules/lucide-vue-next")['TrendingUp']
export const LucideTrendingUpDown: typeof import("../node_modules/lucide-vue-next")['TrendingUpDown']
export const LucideTriangle: typeof import("../node_modules/lucide-vue-next")['Triangle']
export const LucideTriangleAlert: typeof import("../node_modules/lucide-vue-next")['TriangleAlert']
export const LucideTriangleDashed: typeof import("../node_modules/lucide-vue-next")['TriangleDashed']
export const LucideTriangleRight: typeof import("../node_modules/lucide-vue-next")['TriangleRight']
export const LucideTrophy: typeof import("../node_modules/lucide-vue-next")['Trophy']
export const LucideTruck: typeof import("../node_modules/lucide-vue-next")['Truck']
export const LucideTurtle: typeof import("../node_modules/lucide-vue-next")['Turtle']
export const LucideTv: typeof import("../node_modules/lucide-vue-next")['Tv']
export const LucideTv2: typeof import("../node_modules/lucide-vue-next")['Tv2']
export const LucideTvMinimal: typeof import("../node_modules/lucide-vue-next")['TvMinimal']
export const LucideTvMinimalPlay: typeof import("../node_modules/lucide-vue-next")['TvMinimalPlay']
export const LucideTwitch: typeof import("../node_modules/lucide-vue-next")['Twitch']
export const LucideTwitter: typeof import("../node_modules/lucide-vue-next")['Twitter']
export const LucideType: typeof import("../node_modules/lucide-vue-next")['Type']
export const LucideTypeOutline: typeof import("../node_modules/lucide-vue-next")['TypeOutline']
export const LucideUmbrella: typeof import("../node_modules/lucide-vue-next")['Umbrella']
export const LucideUmbrellaOff: typeof import("../node_modules/lucide-vue-next")['UmbrellaOff']
export const LucideUnderline: typeof import("../node_modules/lucide-vue-next")['Underline']
export const LucideUndo: typeof import("../node_modules/lucide-vue-next")['Undo']
export const LucideUndo2: typeof import("../node_modules/lucide-vue-next")['Undo2']
export const LucideUndoDot: typeof import("../node_modules/lucide-vue-next")['UndoDot']
export const LucideUnfoldHorizontal: typeof import("../node_modules/lucide-vue-next")['UnfoldHorizontal']
export const LucideUnfoldVertical: typeof import("../node_modules/lucide-vue-next")['UnfoldVertical']
export const LucideUngroup: typeof import("../node_modules/lucide-vue-next")['Ungroup']
export const LucideUniversity: typeof import("../node_modules/lucide-vue-next")['University']
export const LucideUnlink: typeof import("../node_modules/lucide-vue-next")['Unlink']
export const LucideUnlink2: typeof import("../node_modules/lucide-vue-next")['Unlink2']
export const LucideUnlock: typeof import("../node_modules/lucide-vue-next")['Unlock']
export const LucideUnlockKeyhole: typeof import("../node_modules/lucide-vue-next")['UnlockKeyhole']
export const LucideUnplug: typeof import("../node_modules/lucide-vue-next")['Unplug']
export const LucideUpload: typeof import("../node_modules/lucide-vue-next")['Upload']
export const LucideUploadCloud: typeof import("../node_modules/lucide-vue-next")['UploadCloud']
export const LucideUsb: typeof import("../node_modules/lucide-vue-next")['Usb']
export const LucideUser: typeof import("../node_modules/lucide-vue-next")['User']
export const LucideUser2: typeof import("../node_modules/lucide-vue-next")['User2']
export const LucideUserCheck: typeof import("../node_modules/lucide-vue-next")['UserCheck']
export const LucideUserCheck2: typeof import("../node_modules/lucide-vue-next")['UserCheck2']
export const LucideUserCircle: typeof import("../node_modules/lucide-vue-next")['UserCircle']
export const LucideUserCircle2: typeof import("../node_modules/lucide-vue-next")['UserCircle2']
export const LucideUserCog: typeof import("../node_modules/lucide-vue-next")['UserCog']
export const LucideUserCog2: typeof import("../node_modules/lucide-vue-next")['UserCog2']
export const LucideUserMinus: typeof import("../node_modules/lucide-vue-next")['UserMinus']
export const LucideUserMinus2: typeof import("../node_modules/lucide-vue-next")['UserMinus2']
export const LucideUserPen: typeof import("../node_modules/lucide-vue-next")['UserPen']
export const LucideUserPlus: typeof import("../node_modules/lucide-vue-next")['UserPlus']
export const LucideUserPlus2: typeof import("../node_modules/lucide-vue-next")['UserPlus2']
export const LucideUserRound: typeof import("../node_modules/lucide-vue-next")['UserRound']
export const LucideUserRoundCheck: typeof import("../node_modules/lucide-vue-next")['UserRoundCheck']
export const LucideUserRoundCog: typeof import("../node_modules/lucide-vue-next")['UserRoundCog']
export const LucideUserRoundMinus: typeof import("../node_modules/lucide-vue-next")['UserRoundMinus']
export const LucideUserRoundPen: typeof import("../node_modules/lucide-vue-next")['UserRoundPen']
export const LucideUserRoundPlus: typeof import("../node_modules/lucide-vue-next")['UserRoundPlus']
export const LucideUserRoundSearch: typeof import("../node_modules/lucide-vue-next")['UserRoundSearch']
export const LucideUserRoundX: typeof import("../node_modules/lucide-vue-next")['UserRoundX']
export const LucideUserSearch: typeof import("../node_modules/lucide-vue-next")['UserSearch']
export const LucideUserSquare: typeof import("../node_modules/lucide-vue-next")['UserSquare']
export const LucideUserSquare2: typeof import("../node_modules/lucide-vue-next")['UserSquare2']
export const LucideUserX: typeof import("../node_modules/lucide-vue-next")['UserX']
export const LucideUserX2: typeof import("../node_modules/lucide-vue-next")['UserX2']
export const LucideUsers: typeof import("../node_modules/lucide-vue-next")['Users']
export const LucideUsers2: typeof import("../node_modules/lucide-vue-next")['Users2']
export const LucideUsersRound: typeof import("../node_modules/lucide-vue-next")['UsersRound']
export const LucideUtensils: typeof import("../node_modules/lucide-vue-next")['Utensils']
export const LucideUtensilsCrossed: typeof import("../node_modules/lucide-vue-next")['UtensilsCrossed']
export const LucideUtilityPole: typeof import("../node_modules/lucide-vue-next")['UtilityPole']
export const LucideVariable: typeof import("../node_modules/lucide-vue-next")['Variable']
export const LucideVault: typeof import("../node_modules/lucide-vue-next")['Vault']
export const LucideVegan: typeof import("../node_modules/lucide-vue-next")['Vegan']
export const LucideVenetianMask: typeof import("../node_modules/lucide-vue-next")['VenetianMask']
export const LucideVenus: typeof import("../node_modules/lucide-vue-next")['Venus']
export const LucideVenusAndMars: typeof import("../node_modules/lucide-vue-next")['VenusAndMars']
export const LucideVerified: typeof import("../node_modules/lucide-vue-next")['Verified']
export const LucideVibrate: typeof import("../node_modules/lucide-vue-next")['Vibrate']
export const LucideVibrateOff: typeof import("../node_modules/lucide-vue-next")['VibrateOff']
export const LucideVideo: typeof import("../node_modules/lucide-vue-next")['Video']
export const LucideVideoOff: typeof import("../node_modules/lucide-vue-next")['VideoOff']
export const LucideVideotape: typeof import("../node_modules/lucide-vue-next")['Videotape']
export const LucideView: typeof import("../node_modules/lucide-vue-next")['View']
export const LucideVoicemail: typeof import("../node_modules/lucide-vue-next")['Voicemail']
export const LucideVolleyball: typeof import("../node_modules/lucide-vue-next")['Volleyball']
export const LucideVolume: typeof import("../node_modules/lucide-vue-next")['Volume']
export const LucideVolume1: typeof import("../node_modules/lucide-vue-next")['Volume1']
export const LucideVolume2: typeof import("../node_modules/lucide-vue-next")['Volume2']
export const LucideVolumeOff: typeof import("../node_modules/lucide-vue-next")['VolumeOff']
export const LucideVolumeX: typeof import("../node_modules/lucide-vue-next")['VolumeX']
export const LucideVote: typeof import("../node_modules/lucide-vue-next")['Vote']
export const LucideWallet: typeof import("../node_modules/lucide-vue-next")['Wallet']
export const LucideWallet2: typeof import("../node_modules/lucide-vue-next")['Wallet2']
export const LucideWalletCards: typeof import("../node_modules/lucide-vue-next")['WalletCards']
export const LucideWalletMinimal: typeof import("../node_modules/lucide-vue-next")['WalletMinimal']
export const LucideWallpaper: typeof import("../node_modules/lucide-vue-next")['Wallpaper']
export const LucideWand: typeof import("../node_modules/lucide-vue-next")['Wand']
export const LucideWand2: typeof import("../node_modules/lucide-vue-next")['Wand2']
export const LucideWandSparkles: typeof import("../node_modules/lucide-vue-next")['WandSparkles']
export const LucideWarehouse: typeof import("../node_modules/lucide-vue-next")['Warehouse']
export const LucideWashingMachine: typeof import("../node_modules/lucide-vue-next")['WashingMachine']
export const LucideWatch: typeof import("../node_modules/lucide-vue-next")['Watch']
export const LucideWaves: typeof import("../node_modules/lucide-vue-next")['Waves']
export const LucideWavesLadder: typeof import("../node_modules/lucide-vue-next")['WavesLadder']
export const LucideWaypoints: typeof import("../node_modules/lucide-vue-next")['Waypoints']
export const LucideWebcam: typeof import("../node_modules/lucide-vue-next")['Webcam']
export const LucideWebhook: typeof import("../node_modules/lucide-vue-next")['Webhook']
export const LucideWebhookOff: typeof import("../node_modules/lucide-vue-next")['WebhookOff']
export const LucideWeight: typeof import("../node_modules/lucide-vue-next")['Weight']
export const LucideWheat: typeof import("../node_modules/lucide-vue-next")['Wheat']
export const LucideWheatOff: typeof import("../node_modules/lucide-vue-next")['WheatOff']
export const LucideWholeWord: typeof import("../node_modules/lucide-vue-next")['WholeWord']
export const LucideWifi: typeof import("../node_modules/lucide-vue-next")['Wifi']
export const LucideWifiHigh: typeof import("../node_modules/lucide-vue-next")['WifiHigh']
export const LucideWifiLow: typeof import("../node_modules/lucide-vue-next")['WifiLow']
export const LucideWifiOff: typeof import("../node_modules/lucide-vue-next")['WifiOff']
export const LucideWifiZero: typeof import("../node_modules/lucide-vue-next")['WifiZero']
export const LucideWind: typeof import("../node_modules/lucide-vue-next")['Wind']
export const LucideWindArrowDown: typeof import("../node_modules/lucide-vue-next")['WindArrowDown']
export const LucideWine: typeof import("../node_modules/lucide-vue-next")['Wine']
export const LucideWineOff: typeof import("../node_modules/lucide-vue-next")['WineOff']
export const LucideWorkflow: typeof import("../node_modules/lucide-vue-next")['Workflow']
export const LucideWorm: typeof import("../node_modules/lucide-vue-next")['Worm']
export const LucideWrapText: typeof import("../node_modules/lucide-vue-next")['WrapText']
export const LucideWrench: typeof import("../node_modules/lucide-vue-next")['Wrench']
export const LucideX: typeof import("../node_modules/lucide-vue-next")['X']
export const LucideXCircle: typeof import("../node_modules/lucide-vue-next")['XCircle']
export const LucideXOctagon: typeof import("../node_modules/lucide-vue-next")['XOctagon']
export const LucideXSquare: typeof import("../node_modules/lucide-vue-next")['XSquare']
export const LucideYoutube: typeof import("../node_modules/lucide-vue-next")['Youtube']
export const LucideZap: typeof import("../node_modules/lucide-vue-next")['Zap']
export const LucideZapOff: typeof import("../node_modules/lucide-vue-next")['ZapOff']
export const LucideZoomIn: typeof import("../node_modules/lucide-vue-next")['ZoomIn']
export const LucideZoomOut: typeof import("../node_modules/lucide-vue-next")['ZoomOut']
export const Lucideicons: typeof import("../node_modules/lucide-vue-next")['icons']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyBaseNavigation: LazyComponent<typeof import("../components/BaseNavigation.vue")['default']>
export const LazyLoginForm: LazyComponent<typeof import("../components/LoginForm.vue")['default']>
export const LazyLoginNavigation: LazyComponent<typeof import("../components/LoginNavigation.vue")['default']>
export const LazyMostPopular: LazyComponent<typeof import("../components/MostPopular.vue")['default']>
export const LazyRecomendation: LazyComponent<typeof import("../components/Recomendation.vue")['default']>
export const LazyRegistrationForm: LazyComponent<typeof import("../components/RegistrationForm.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
export const LazyFormControl: LazyComponent<typeof import("../components/ui/form/index")['FormControl']>
export const LazyFormDescription: LazyComponent<typeof import("../components/ui/form/index")['FormDescription']>
export const LazyFormItem: LazyComponent<typeof import("../components/ui/form/index")['FormItem']>
export const LazyFormLabel: LazyComponent<typeof import("../components/ui/form/index")['FormLabel']>
export const LazyFormMessage: LazyComponent<typeof import("../components/ui/form/index")['FormMessage']>
export const LazyFORMITEMINJECTIONKEY: LazyComponent<typeof import("../components/ui/form/index")['FORM_ITEM_INJECTION_KEY']>
export const LazyForm: LazyComponent<typeof import("../components/ui/form/index")['Form']>
export const LazyFormField: LazyComponent<typeof import("../components/ui/form/index")['FormField']>
export const LazyFormFieldArray: LazyComponent<typeof import("../components/ui/form/index")['FormFieldArray']>
export const LazyButton: LazyComponent<typeof import("../components/ui/button/index")['Button']>
export const LazyInput: LazyComponent<typeof import("../components/ui/input/index")['Input']>
export const LazyLabel: LazyComponent<typeof import("../components/ui/label/index")['Label']>
export const LazyLucideAArrowDown: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AArrowDown']>
export const LazyLucideAArrowUp: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AArrowUp']>
export const LazyLucideALargeSmall: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ALargeSmall']>
export const LazyLucideAccessibility: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Accessibility']>
export const LazyLucideActivity: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Activity']>
export const LazyLucideActivitySquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ActivitySquare']>
export const LazyLucideAirVent: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AirVent']>
export const LazyLucideAirplay: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Airplay']>
export const LazyLucideAlarmCheck: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlarmCheck']>
export const LazyLucideAlarmClock: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlarmClock']>
export const LazyLucideAlarmClockCheck: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlarmClockCheck']>
export const LazyLucideAlarmClockMinus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlarmClockMinus']>
export const LazyLucideAlarmClockOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlarmClockOff']>
export const LazyLucideAlarmClockPlus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlarmClockPlus']>
export const LazyLucideAlarmMinus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlarmMinus']>
export const LazyLucideAlarmPlus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlarmPlus']>
export const LazyLucideAlarmSmoke: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlarmSmoke']>
export const LazyLucideAlbum: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Album']>
export const LazyLucideAlertCircle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlertCircle']>
export const LazyLucideAlertOctagon: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlertOctagon']>
export const LazyLucideAlertTriangle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlertTriangle']>
export const LazyLucideAlignCenter: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignCenter']>
export const LazyLucideAlignCenterHorizontal: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignCenterHorizontal']>
export const LazyLucideAlignCenterVertical: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignCenterVertical']>
export const LazyLucideAlignEndHorizontal: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignEndHorizontal']>
export const LazyLucideAlignEndVertical: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignEndVertical']>
export const LazyLucideAlignHorizontalDistributeCenter: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignHorizontalDistributeCenter']>
export const LazyLucideAlignHorizontalDistributeEnd: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignHorizontalDistributeEnd']>
export const LazyLucideAlignHorizontalDistributeStart: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignHorizontalDistributeStart']>
export const LazyLucideAlignHorizontalJustifyCenter: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignHorizontalJustifyCenter']>
export const LazyLucideAlignHorizontalJustifyEnd: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignHorizontalJustifyEnd']>
export const LazyLucideAlignHorizontalJustifyStart: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignHorizontalJustifyStart']>
export const LazyLucideAlignHorizontalSpaceAround: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignHorizontalSpaceAround']>
export const LazyLucideAlignHorizontalSpaceBetween: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignHorizontalSpaceBetween']>
export const LazyLucideAlignJustify: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignJustify']>
export const LazyLucideAlignLeft: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignLeft']>
export const LazyLucideAlignRight: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignRight']>
export const LazyLucideAlignStartHorizontal: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignStartHorizontal']>
export const LazyLucideAlignStartVertical: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignStartVertical']>
export const LazyLucideAlignVerticalDistributeCenter: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignVerticalDistributeCenter']>
export const LazyLucideAlignVerticalDistributeEnd: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignVerticalDistributeEnd']>
export const LazyLucideAlignVerticalDistributeStart: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignVerticalDistributeStart']>
export const LazyLucideAlignVerticalJustifyCenter: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignVerticalJustifyCenter']>
export const LazyLucideAlignVerticalJustifyEnd: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignVerticalJustifyEnd']>
export const LazyLucideAlignVerticalJustifyStart: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignVerticalJustifyStart']>
export const LazyLucideAlignVerticalSpaceAround: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignVerticalSpaceAround']>
export const LazyLucideAlignVerticalSpaceBetween: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AlignVerticalSpaceBetween']>
export const LazyLucideAmbulance: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Ambulance']>
export const LazyLucideAmpersand: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Ampersand']>
export const LazyLucideAmpersands: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Ampersands']>
export const LazyLucideAmphora: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Amphora']>
export const LazyLucideAnchor: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Anchor']>
export const LazyLucideAngry: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Angry']>
export const LazyLucideAnnoyed: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Annoyed']>
export const LazyLucideAntenna: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Antenna']>
export const LazyLucideAnvil: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Anvil']>
export const LazyLucideAperture: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Aperture']>
export const LazyLucideAppWindow: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AppWindow']>
export const LazyLucideAppWindowMac: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AppWindowMac']>
export const LazyLucideApple: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Apple']>
export const LazyLucideArchive: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Archive']>
export const LazyLucideArchiveRestore: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArchiveRestore']>
export const LazyLucideArchiveX: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArchiveX']>
export const LazyLucideAreaChart: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AreaChart']>
export const LazyLucideArmchair: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Armchair']>
export const LazyLucideArrowBigDown: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowBigDown']>
export const LazyLucideArrowBigDownDash: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowBigDownDash']>
export const LazyLucideArrowBigLeft: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowBigLeft']>
export const LazyLucideArrowBigLeftDash: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowBigLeftDash']>
export const LazyLucideArrowBigRight: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowBigRight']>
export const LazyLucideArrowBigRightDash: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowBigRightDash']>
export const LazyLucideArrowBigUp: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowBigUp']>
export const LazyLucideArrowBigUpDash: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowBigUpDash']>
export const LazyLucideArrowDown: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDown']>
export const LazyLucideArrowDown01: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDown01']>
export const LazyLucideArrowDown10: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDown10']>
export const LazyLucideArrowDownAz: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDownAz']>
export const LazyLucideArrowDownCircle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDownCircle']>
export const LazyLucideArrowDownFromLine: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDownFromLine']>
export const LazyLucideArrowDownLeft: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDownLeft']>
export const LazyLucideArrowDownLeftFromCircle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDownLeftFromCircle']>
export const LazyLucideArrowDownLeftFromSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDownLeftFromSquare']>
export const LazyLucideArrowDownLeftSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDownLeftSquare']>
export const LazyLucideArrowDownNarrowWide: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDownNarrowWide']>
export const LazyLucideArrowDownRight: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDownRight']>
export const LazyLucideArrowDownRightFromCircle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDownRightFromCircle']>
export const LazyLucideArrowDownRightFromSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDownRightFromSquare']>
export const LazyLucideArrowDownRightSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDownRightSquare']>
export const LazyLucideArrowDownSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDownSquare']>
export const LazyLucideArrowDownToDot: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDownToDot']>
export const LazyLucideArrowDownToLine: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDownToLine']>
export const LazyLucideArrowDownUp: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDownUp']>
export const LazyLucideArrowDownWideNarrow: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDownWideNarrow']>
export const LazyLucideArrowDownZa: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowDownZa']>
export const LazyLucideArrowLeft: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowLeft']>
export const LazyLucideArrowLeftCircle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowLeftCircle']>
export const LazyLucideArrowLeftFromLine: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowLeftFromLine']>
export const LazyLucideArrowLeftRight: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowLeftRight']>
export const LazyLucideArrowLeftSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowLeftSquare']>
export const LazyLucideArrowLeftToLine: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowLeftToLine']>
export const LazyLucideArrowRight: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowRight']>
export const LazyLucideArrowRightCircle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowRightCircle']>
export const LazyLucideArrowRightFromLine: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowRightFromLine']>
export const LazyLucideArrowRightLeft: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowRightLeft']>
export const LazyLucideArrowRightSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowRightSquare']>
export const LazyLucideArrowRightToLine: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowRightToLine']>
export const LazyLucideArrowUp: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUp']>
export const LazyLucideArrowUp01: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUp01']>
export const LazyLucideArrowUp10: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUp10']>
export const LazyLucideArrowUpAz: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUpAz']>
export const LazyLucideArrowUpCircle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUpCircle']>
export const LazyLucideArrowUpDown: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUpDown']>
export const LazyLucideArrowUpFromDot: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUpFromDot']>
export const LazyLucideArrowUpFromLine: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUpFromLine']>
export const LazyLucideArrowUpLeft: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUpLeft']>
export const LazyLucideArrowUpLeftFromCircle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUpLeftFromCircle']>
export const LazyLucideArrowUpLeftFromSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUpLeftFromSquare']>
export const LazyLucideArrowUpLeftSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUpLeftSquare']>
export const LazyLucideArrowUpNarrowWide: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUpNarrowWide']>
export const LazyLucideArrowUpRight: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUpRight']>
export const LazyLucideArrowUpRightFromCircle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUpRightFromCircle']>
export const LazyLucideArrowUpRightFromSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUpRightFromSquare']>
export const LazyLucideArrowUpRightSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUpRightSquare']>
export const LazyLucideArrowUpSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUpSquare']>
export const LazyLucideArrowUpToLine: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUpToLine']>
export const LazyLucideArrowUpWideNarrow: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUpWideNarrow']>
export const LazyLucideArrowUpZa: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowUpZa']>
export const LazyLucideArrowsUpFromLine: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ArrowsUpFromLine']>
export const LazyLucideAsterisk: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Asterisk']>
export const LazyLucideAsteriskSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AsteriskSquare']>
export const LazyLucideAtSign: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AtSign']>
export const LazyLucideAtom: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Atom']>
export const LazyLucideAudioLines: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AudioLines']>
export const LazyLucideAudioWaveform: LazyComponent<typeof import("../node_modules/lucide-vue-next")['AudioWaveform']>
export const LazyLucideAward: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Award']>
export const LazyLucideAxe: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Axe']>
export const LazyLucideAxis3d: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Axis3d']>
export const LazyLucideBaby: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Baby']>
export const LazyLucideBackpack: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Backpack']>
export const LazyLucideBadge: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Badge']>
export const LazyLucideBadgeAlert: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BadgeAlert']>
export const LazyLucideBadgeCent: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BadgeCent']>
export const LazyLucideBadgeCheck: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BadgeCheck']>
export const LazyLucideBadgeDollarSign: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BadgeDollarSign']>
export const LazyLucideBadgeEuro: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BadgeEuro']>
export const LazyLucideBadgeHelp: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BadgeHelp']>
export const LazyLucideBadgeIndianRupee: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BadgeIndianRupee']>
export const LazyLucideBadgeInfo: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BadgeInfo']>
export const LazyLucideBadgeJapaneseYen: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BadgeJapaneseYen']>
export const LazyLucideBadgeMinus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BadgeMinus']>
export const LazyLucideBadgePercent: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BadgePercent']>
export const LazyLucideBadgePlus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BadgePlus']>
export const LazyLucideBadgePoundSterling: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BadgePoundSterling']>
export const LazyLucideBadgeRussianRuble: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BadgeRussianRuble']>
export const LazyLucideBadgeSwissFranc: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BadgeSwissFranc']>
export const LazyLucideBadgeX: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BadgeX']>
export const LazyLucideBaggageClaim: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BaggageClaim']>
export const LazyLucideBan: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Ban']>
export const LazyLucideBanana: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Banana']>
export const LazyLucideBandage: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Bandage']>
export const LazyLucideBanknote: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Banknote']>
export const LazyLucideBanknoteArrowDown: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BanknoteArrowDown']>
export const LazyLucideBanknoteArrowUp: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BanknoteArrowUp']>
export const LazyLucideBanknoteX: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BanknoteX']>
export const LazyLucideBarChart: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BarChart']>
export const LazyLucideBarChart2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BarChart2']>
export const LazyLucideBarChart3: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BarChart3']>
export const LazyLucideBarChart4: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BarChart4']>
export const LazyLucideBarChartBig: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BarChartBig']>
export const LazyLucideBarChartHorizontal: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BarChartHorizontal']>
export const LazyLucideBarChartHorizontalBig: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BarChartHorizontalBig']>
export const LazyLucideBarcode: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Barcode']>
export const LazyLucideBaseline: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Baseline']>
export const LazyLucideBath: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Bath']>
export const LazyLucideBattery: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Battery']>
export const LazyLucideBatteryCharging: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BatteryCharging']>
export const LazyLucideBatteryFull: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BatteryFull']>
export const LazyLucideBatteryLow: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BatteryLow']>
export const LazyLucideBatteryMedium: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BatteryMedium']>
export const LazyLucideBatteryPlus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BatteryPlus']>
export const LazyLucideBatteryWarning: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BatteryWarning']>
export const LazyLucideBeaker: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Beaker']>
export const LazyLucideBean: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Bean']>
export const LazyLucideBeanOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BeanOff']>
export const LazyLucideBed: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Bed']>
export const LazyLucideBedDouble: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BedDouble']>
export const LazyLucideBedSingle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BedSingle']>
export const LazyLucideBeef: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Beef']>
export const LazyLucideBeer: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Beer']>
export const LazyLucideBeerOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BeerOff']>
export const LazyLucideBell: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Bell']>
export const LazyLucideBellDot: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BellDot']>
export const LazyLucideBellElectric: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BellElectric']>
export const LazyLucideBellMinus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BellMinus']>
export const LazyLucideBellOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BellOff']>
export const LazyLucideBellPlus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BellPlus']>
export const LazyLucideBellRing: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BellRing']>
export const LazyLucideBetweenHorizonalEnd: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BetweenHorizonalEnd']>
export const LazyLucideBetweenHorizonalStart: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BetweenHorizonalStart']>
export const LazyLucideBetweenHorizontalEnd: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BetweenHorizontalEnd']>
export const LazyLucideBetweenHorizontalStart: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BetweenHorizontalStart']>
export const LazyLucideBetweenVerticalEnd: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BetweenVerticalEnd']>
export const LazyLucideBetweenVerticalStart: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BetweenVerticalStart']>
export const LazyLucideBicepsFlexed: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BicepsFlexed']>
export const LazyLucideBike: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Bike']>
export const LazyLucideBinary: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Binary']>
export const LazyLucideBinoculars: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Binoculars']>
export const LazyLucideBiohazard: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Biohazard']>
export const LazyLucideBird: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Bird']>
export const LazyLucideBitcoin: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Bitcoin']>
export const LazyLucideBlend: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Blend']>
export const LazyLucideBlinds: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Blinds']>
export const LazyLucideBlocks: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Blocks']>
export const LazyLucideBluetooth: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Bluetooth']>
export const LazyLucideBluetoothConnected: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BluetoothConnected']>
export const LazyLucideBluetoothOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BluetoothOff']>
export const LazyLucideBluetoothSearching: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BluetoothSearching']>
export const LazyLucideBold: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Bold']>
export const LazyLucideBolt: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Bolt']>
export const LazyLucideBomb: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Bomb']>
export const LazyLucideBone: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Bone']>
export const LazyLucideBook: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Book']>
export const LazyLucideBookA: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookA']>
export const LazyLucideBookAudio: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookAudio']>
export const LazyLucideBookCheck: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookCheck']>
export const LazyLucideBookCopy: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookCopy']>
export const LazyLucideBookDashed: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookDashed']>
export const LazyLucideBookDown: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookDown']>
export const LazyLucideBookHeadphones: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookHeadphones']>
export const LazyLucideBookHeart: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookHeart']>
export const LazyLucideBookImage: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookImage']>
export const LazyLucideBookKey: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookKey']>
export const LazyLucideBookLock: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookLock']>
export const LazyLucideBookMarked: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookMarked']>
export const LazyLucideBookMinus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookMinus']>
export const LazyLucideBookOpen: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookOpen']>
export const LazyLucideBookOpenCheck: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookOpenCheck']>
export const LazyLucideBookOpenText: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookOpenText']>
export const LazyLucideBookPlus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookPlus']>
export const LazyLucideBookTemplate: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookTemplate']>
export const LazyLucideBookText: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookText']>
export const LazyLucideBookType: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookType']>
export const LazyLucideBookUp: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookUp']>
export const LazyLucideBookUp2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookUp2']>
export const LazyLucideBookUser: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookUser']>
export const LazyLucideBookX: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookX']>
export const LazyLucideBookmark: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Bookmark']>
export const LazyLucideBookmarkCheck: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookmarkCheck']>
export const LazyLucideBookmarkMinus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookmarkMinus']>
export const LazyLucideBookmarkPlus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookmarkPlus']>
export const LazyLucideBookmarkX: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BookmarkX']>
export const LazyLucideBoomBox: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BoomBox']>
export const LazyLucideBot: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Bot']>
export const LazyLucideBotMessageSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BotMessageSquare']>
export const LazyLucideBotOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BotOff']>
export const LazyLucideBox: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Box']>
export const LazyLucideBoxSelect: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BoxSelect']>
export const LazyLucideBoxes: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Boxes']>
export const LazyLucideBraces: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Braces']>
export const LazyLucideBrackets: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Brackets']>
export const LazyLucideBrain: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Brain']>
export const LazyLucideBrainCircuit: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BrainCircuit']>
export const LazyLucideBrainCog: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BrainCog']>
export const LazyLucideBrickWall: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BrickWall']>
export const LazyLucideBriefcase: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Briefcase']>
export const LazyLucideBriefcaseBusiness: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BriefcaseBusiness']>
export const LazyLucideBriefcaseConveyorBelt: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BriefcaseConveyorBelt']>
export const LazyLucideBriefcaseMedical: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BriefcaseMedical']>
export const LazyLucideBringToFront: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BringToFront']>
export const LazyLucideBrush: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Brush']>
export const LazyLucideBug: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Bug']>
export const LazyLucideBugOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BugOff']>
export const LazyLucideBugPlay: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BugPlay']>
export const LazyLucideBuilding: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Building']>
export const LazyLucideBuilding2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Building2']>
export const LazyLucideBus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Bus']>
export const LazyLucideBusFront: LazyComponent<typeof import("../node_modules/lucide-vue-next")['BusFront']>
export const LazyLucideCable: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Cable']>
export const LazyLucideCableCar: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CableCar']>
export const LazyLucideCake: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Cake']>
export const LazyLucideCakeSlice: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CakeSlice']>
export const LazyLucideCalculator: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Calculator']>
export const LazyLucideCalendar: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Calendar']>
export const LazyLucideCalendar1: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Calendar1']>
export const LazyLucideCalendarArrowDown: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CalendarArrowDown']>
export const LazyLucideCalendarArrowUp: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CalendarArrowUp']>
export const LazyLucideCalendarCheck: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CalendarCheck']>
export const LazyLucideCalendarCheck2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CalendarCheck2']>
export const LazyLucideCalendarClock: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CalendarClock']>
export const LazyLucideCalendarCog: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CalendarCog']>
export const LazyLucideCalendarDays: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CalendarDays']>
export const LazyLucideCalendarFold: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CalendarFold']>
export const LazyLucideCalendarHeart: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CalendarHeart']>
export const LazyLucideCalendarMinus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CalendarMinus']>
export const LazyLucideCalendarMinus2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CalendarMinus2']>
export const LazyLucideCalendarOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CalendarOff']>
export const LazyLucideCalendarPlus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CalendarPlus']>
export const LazyLucideCalendarPlus2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CalendarPlus2']>
export const LazyLucideCalendarRange: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CalendarRange']>
export const LazyLucideCalendarSearch: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CalendarSearch']>
export const LazyLucideCalendarSync: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CalendarSync']>
export const LazyLucideCalendarX: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CalendarX']>
export const LazyLucideCalendarX2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CalendarX2']>
export const LazyLucideCamera: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Camera']>
export const LazyLucideCameraOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CameraOff']>
export const LazyLucideCandlestickChart: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CandlestickChart']>
export const LazyLucideCandy: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Candy']>
export const LazyLucideCandyCane: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CandyCane']>
export const LazyLucideCandyOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CandyOff']>
export const LazyLucideCannabis: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Cannabis']>
export const LazyLucideCaptions: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Captions']>
export const LazyLucideCaptionsOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CaptionsOff']>
export const LazyLucideCar: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Car']>
export const LazyLucideCarFront: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CarFront']>
export const LazyLucideCarTaxiFront: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CarTaxiFront']>
export const LazyLucideCaravan: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Caravan']>
export const LazyLucideCarrot: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Carrot']>
export const LazyLucideCaseLower: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CaseLower']>
export const LazyLucideCaseSensitive: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CaseSensitive']>
export const LazyLucideCaseUpper: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CaseUpper']>
export const LazyLucideCassetteTape: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CassetteTape']>
export const LazyLucideCast: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Cast']>
export const LazyLucideCastle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Castle']>
export const LazyLucideCat: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Cat']>
export const LazyLucideCctv: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Cctv']>
export const LazyLucideChartArea: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartArea']>
export const LazyLucideChartBar: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartBar']>
export const LazyLucideChartBarBig: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartBarBig']>
export const LazyLucideChartBarDecreasing: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartBarDecreasing']>
export const LazyLucideChartBarIncreasing: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartBarIncreasing']>
export const LazyLucideChartBarStacked: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartBarStacked']>
export const LazyLucideChartCandlestick: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartCandlestick']>
export const LazyLucideChartColumn: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartColumn']>
export const LazyLucideChartColumnBig: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartColumnBig']>
export const LazyLucideChartColumnDecreasing: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartColumnDecreasing']>
export const LazyLucideChartColumnIncreasing: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartColumnIncreasing']>
export const LazyLucideChartColumnStacked: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartColumnStacked']>
export const LazyLucideChartGantt: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartGantt']>
export const LazyLucideChartLine: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartLine']>
export const LazyLucideChartNetwork: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartNetwork']>
export const LazyLucideChartNoAxesColumn: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartNoAxesColumn']>
export const LazyLucideChartNoAxesColumnDecreasing: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartNoAxesColumnDecreasing']>
export const LazyLucideChartNoAxesColumnIncreasing: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartNoAxesColumnIncreasing']>
export const LazyLucideChartNoAxesCombined: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartNoAxesCombined']>
export const LazyLucideChartNoAxesGantt: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartNoAxesGantt']>
export const LazyLucideChartPie: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartPie']>
export const LazyLucideChartScatter: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartScatter']>
export const LazyLucideChartSpline: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChartSpline']>
export const LazyLucideCheck: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Check']>
export const LazyLucideCheckCheck: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CheckCheck']>
export const LazyLucideCheckCircle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CheckCircle']>
export const LazyLucideCheckCircle2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CheckCircle2']>
export const LazyLucideCheckSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CheckSquare']>
export const LazyLucideCheckSquare2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CheckSquare2']>
export const LazyLucideChefHat: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChefHat']>
export const LazyLucideCherry: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Cherry']>
export const LazyLucideChevronDown: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronDown']>
export const LazyLucideChevronDownCircle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronDownCircle']>
export const LazyLucideChevronDownSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronDownSquare']>
export const LazyLucideChevronFirst: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronFirst']>
export const LazyLucideChevronLast: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronLast']>
export const LazyLucideChevronLeft: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronLeft']>
export const LazyLucideChevronLeftCircle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronLeftCircle']>
export const LazyLucideChevronLeftSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronLeftSquare']>
export const LazyLucideChevronRight: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronRight']>
export const LazyLucideChevronRightCircle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronRightCircle']>
export const LazyLucideChevronRightSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronRightSquare']>
export const LazyLucideChevronUp: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronUp']>
export const LazyLucideChevronUpCircle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronUpCircle']>
export const LazyLucideChevronUpSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronUpSquare']>
export const LazyLucideChevronsDown: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronsDown']>
export const LazyLucideChevronsDownUp: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronsDownUp']>
export const LazyLucideChevronsLeft: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronsLeft']>
export const LazyLucideChevronsLeftRight: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronsLeftRight']>
export const LazyLucideChevronsLeftRightEllipsis: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronsLeftRightEllipsis']>
export const LazyLucideChevronsRight: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronsRight']>
export const LazyLucideChevronsRightLeft: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronsRightLeft']>
export const LazyLucideChevronsUp: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronsUp']>
export const LazyLucideChevronsUpDown: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ChevronsUpDown']>
export const LazyLucideChrome: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Chrome']>
export const LazyLucideChurch: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Church']>
export const LazyLucideCigarette: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Cigarette']>
export const LazyLucideCigaretteOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CigaretteOff']>
export const LazyLucideCircle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Circle']>
export const LazyLucideCircleAlert: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleAlert']>
export const LazyLucideCircleArrowDown: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleArrowDown']>
export const LazyLucideCircleArrowLeft: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleArrowLeft']>
export const LazyLucideCircleArrowOutDownLeft: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleArrowOutDownLeft']>
export const LazyLucideCircleArrowOutDownRight: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleArrowOutDownRight']>
export const LazyLucideCircleArrowOutUpLeft: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleArrowOutUpLeft']>
export const LazyLucideCircleArrowOutUpRight: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleArrowOutUpRight']>
export const LazyLucideCircleArrowRight: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleArrowRight']>
export const LazyLucideCircleArrowUp: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleArrowUp']>
export const LazyLucideCircleCheck: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleCheck']>
export const LazyLucideCircleCheckBig: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleCheckBig']>
export const LazyLucideCircleChevronDown: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleChevronDown']>
export const LazyLucideCircleChevronLeft: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleChevronLeft']>
export const LazyLucideCircleChevronRight: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleChevronRight']>
export const LazyLucideCircleChevronUp: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleChevronUp']>
export const LazyLucideCircleDashed: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleDashed']>
export const LazyLucideCircleDivide: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleDivide']>
export const LazyLucideCircleDollarSign: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleDollarSign']>
export const LazyLucideCircleDot: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleDot']>
export const LazyLucideCircleDotDashed: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleDotDashed']>
export const LazyLucideCircleEllipsis: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleEllipsis']>
export const LazyLucideCircleEqual: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleEqual']>
export const LazyLucideCircleFadingArrowUp: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleFadingArrowUp']>
export const LazyLucideCircleFadingPlus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleFadingPlus']>
export const LazyLucideCircleGauge: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleGauge']>
export const LazyLucideCircleHelp: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleHelp']>
export const LazyLucideCircleMinus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleMinus']>
export const LazyLucideCircleOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleOff']>
export const LazyLucideCircleParking: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleParking']>
export const LazyLucideCircleParkingOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleParkingOff']>
export const LazyLucideCirclePause: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CirclePause']>
export const LazyLucideCirclePercent: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CirclePercent']>
export const LazyLucideCirclePlay: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CirclePlay']>
export const LazyLucideCirclePlus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CirclePlus']>
export const LazyLucideCirclePower: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CirclePower']>
export const LazyLucideCircleSlash: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleSlash']>
export const LazyLucideCircleSlash2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleSlash2']>
export const LazyLucideCircleSlashed: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleSlashed']>
export const LazyLucideCircleSmall: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleSmall']>
export const LazyLucideCircleStop: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleStop']>
export const LazyLucideCircleUser: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleUser']>
export const LazyLucideCircleUserRound: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleUserRound']>
export const LazyLucideCircleX: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircleX']>
export const LazyLucideCircuitBoard: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CircuitBoard']>
export const LazyLucideCitrus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Citrus']>
export const LazyLucideClapperboard: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Clapperboard']>
export const LazyLucideClipboard: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Clipboard']>
export const LazyLucideClipboardCheck: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ClipboardCheck']>
export const LazyLucideClipboardCopy: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ClipboardCopy']>
export const LazyLucideClipboardEdit: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ClipboardEdit']>
export const LazyLucideClipboardList: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ClipboardList']>
export const LazyLucideClipboardMinus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ClipboardMinus']>
export const LazyLucideClipboardPaste: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ClipboardPaste']>
export const LazyLucideClipboardPen: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ClipboardPen']>
export const LazyLucideClipboardPenLine: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ClipboardPenLine']>
export const LazyLucideClipboardPlus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ClipboardPlus']>
export const LazyLucideClipboardSignature: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ClipboardSignature']>
export const LazyLucideClipboardType: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ClipboardType']>
export const LazyLucideClipboardX: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ClipboardX']>
export const LazyLucideClock: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Clock']>
export const LazyLucideClock1: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Clock1']>
export const LazyLucideClock10: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Clock10']>
export const LazyLucideClock11: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Clock11']>
export const LazyLucideClock12: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Clock12']>
export const LazyLucideClock2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Clock2']>
export const LazyLucideClock3: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Clock3']>
export const LazyLucideClock4: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Clock4']>
export const LazyLucideClock5: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Clock5']>
export const LazyLucideClock6: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Clock6']>
export const LazyLucideClock7: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Clock7']>
export const LazyLucideClock8: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Clock8']>
export const LazyLucideClock9: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Clock9']>
export const LazyLucideClockAlert: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ClockAlert']>
export const LazyLucideClockArrowDown: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ClockArrowDown']>
export const LazyLucideClockArrowUp: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ClockArrowUp']>
export const LazyLucideClockFading: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ClockFading']>
export const LazyLucideCloud: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Cloud']>
export const LazyLucideCloudAlert: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CloudAlert']>
export const LazyLucideCloudCog: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CloudCog']>
export const LazyLucideCloudDownload: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CloudDownload']>
export const LazyLucideCloudDrizzle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CloudDrizzle']>
export const LazyLucideCloudFog: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CloudFog']>
export const LazyLucideCloudHail: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CloudHail']>
export const LazyLucideCloudLightning: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CloudLightning']>
export const LazyLucideCloudMoon: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CloudMoon']>
export const LazyLucideCloudMoonRain: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CloudMoonRain']>
export const LazyLucideCloudOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CloudOff']>
export const LazyLucideCloudRain: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CloudRain']>
export const LazyLucideCloudRainWind: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CloudRainWind']>
export const LazyLucideCloudSnow: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CloudSnow']>
export const LazyLucideCloudSun: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CloudSun']>
export const LazyLucideCloudSunRain: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CloudSunRain']>
export const LazyLucideCloudUpload: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CloudUpload']>
export const LazyLucideCloudy: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Cloudy']>
export const LazyLucideClover: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Clover']>
export const LazyLucideClub: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Club']>
export const LazyLucideCode: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Code']>
export const LazyLucideCode2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Code2']>
export const LazyLucideCodeSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CodeSquare']>
export const LazyLucideCodeXml: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CodeXml']>
export const LazyLucideCodepen: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Codepen']>
export const LazyLucideCodesandbox: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Codesandbox']>
export const LazyLucideCoffee: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Coffee']>
export const LazyLucideCog: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Cog']>
export const LazyLucideCoins: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Coins']>
export const LazyLucideColumns: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Columns']>
export const LazyLucideColumns2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Columns2']>
export const LazyLucideColumns3: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Columns3']>
export const LazyLucideColumns4: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Columns4']>
export const LazyLucideCombine: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Combine']>
export const LazyLucideCommand: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Command']>
export const LazyLucideCompass: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Compass']>
export const LazyLucideComponent: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Component']>
export const LazyLucideComputer: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Computer']>
export const LazyLucideConciergeBell: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ConciergeBell']>
export const LazyLucideCone: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Cone']>
export const LazyLucideConstruction: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Construction']>
export const LazyLucideContact: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Contact']>
export const LazyLucideContact2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Contact2']>
export const LazyLucideContactRound: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ContactRound']>
export const LazyLucideContainer: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Container']>
export const LazyLucideContrast: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Contrast']>
export const LazyLucideCookie: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Cookie']>
export const LazyLucideCookingPot: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CookingPot']>
export const LazyLucideCopy: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Copy']>
export const LazyLucideCopyCheck: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CopyCheck']>
export const LazyLucideCopyMinus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CopyMinus']>
export const LazyLucideCopyPlus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CopyPlus']>
export const LazyLucideCopySlash: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CopySlash']>
export const LazyLucideCopyX: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CopyX']>
export const LazyLucideCopyleft: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Copyleft']>
export const LazyLucideCopyright: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Copyright']>
export const LazyLucideCornerDownLeft: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CornerDownLeft']>
export const LazyLucideCornerDownRight: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CornerDownRight']>
export const LazyLucideCornerLeftDown: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CornerLeftDown']>
export const LazyLucideCornerLeftUp: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CornerLeftUp']>
export const LazyLucideCornerRightDown: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CornerRightDown']>
export const LazyLucideCornerRightUp: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CornerRightUp']>
export const LazyLucideCornerUpLeft: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CornerUpLeft']>
export const LazyLucideCornerUpRight: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CornerUpRight']>
export const LazyLucideCpu: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Cpu']>
export const LazyLucideCreativeCommons: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CreativeCommons']>
export const LazyLucideCreditCard: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CreditCard']>
export const LazyLucideCroissant: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Croissant']>
export const LazyLucideCrop: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Crop']>
export const LazyLucideCross: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Cross']>
export const LazyLucideCrosshair: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Crosshair']>
export const LazyLucideCrown: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Crown']>
export const LazyLucideCuboid: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Cuboid']>
export const LazyLucideCupSoda: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CupSoda']>
export const LazyLucideCurlyBraces: LazyComponent<typeof import("../node_modules/lucide-vue-next")['CurlyBraces']>
export const LazyLucideCurrency: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Currency']>
export const LazyLucideCylinder: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Cylinder']>
export const LazyLucideDam: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Dam']>
export const LazyLucideDatabase: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Database']>
export const LazyLucideDatabaseBackup: LazyComponent<typeof import("../node_modules/lucide-vue-next")['DatabaseBackup']>
export const LazyLucideDatabaseZap: LazyComponent<typeof import("../node_modules/lucide-vue-next")['DatabaseZap']>
export const LazyLucideDelete: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Delete']>
export const LazyLucideDessert: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Dessert']>
export const LazyLucideDiameter: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Diameter']>
export const LazyLucideDiamond: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Diamond']>
export const LazyLucideDiamondMinus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['DiamondMinus']>
export const LazyLucideDiamondPercent: LazyComponent<typeof import("../node_modules/lucide-vue-next")['DiamondPercent']>
export const LazyLucideDiamondPlus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['DiamondPlus']>
export const LazyLucideDice1: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Dice1']>
export const LazyLucideDice2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Dice2']>
export const LazyLucideDice3: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Dice3']>
export const LazyLucideDice4: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Dice4']>
export const LazyLucideDice5: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Dice5']>
export const LazyLucideDice6: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Dice6']>
export const LazyLucideDices: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Dices']>
export const LazyLucideDiff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Diff']>
export const LazyLucideDisc: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Disc']>
export const LazyLucideDisc2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Disc2']>
export const LazyLucideDisc3: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Disc3']>
export const LazyLucideDiscAlbum: LazyComponent<typeof import("../node_modules/lucide-vue-next")['DiscAlbum']>
export const LazyLucideDivide: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Divide']>
export const LazyLucideDivideCircle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['DivideCircle']>
export const LazyLucideDivideSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['DivideSquare']>
export const LazyLucideDna: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Dna']>
export const LazyLucideDnaOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['DnaOff']>
export const LazyLucideDock: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Dock']>
export const LazyLucideDog: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Dog']>
export const LazyLucideDollarSign: LazyComponent<typeof import("../node_modules/lucide-vue-next")['DollarSign']>
export const LazyLucideDonut: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Donut']>
export const LazyLucideDoorClosed: LazyComponent<typeof import("../node_modules/lucide-vue-next")['DoorClosed']>
export const LazyLucideDoorOpen: LazyComponent<typeof import("../node_modules/lucide-vue-next")['DoorOpen']>
export const LazyLucideDot: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Dot']>
export const LazyLucideDotSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['DotSquare']>
export const LazyLucideDownload: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Download']>
export const LazyLucideDownloadCloud: LazyComponent<typeof import("../node_modules/lucide-vue-next")['DownloadCloud']>
export const LazyLucideDraftingCompass: LazyComponent<typeof import("../node_modules/lucide-vue-next")['DraftingCompass']>
export const LazyLucideDrama: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Drama']>
export const LazyLucideDribbble: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Dribbble']>
export const LazyLucideDrill: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Drill']>
export const LazyLucideDroplet: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Droplet']>
export const LazyLucideDropletOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['DropletOff']>
export const LazyLucideDroplets: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Droplets']>
export const LazyLucideDrum: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Drum']>
export const LazyLucideDrumstick: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Drumstick']>
export const LazyLucideDumbbell: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Dumbbell']>
export const LazyLucideEar: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Ear']>
export const LazyLucideEarOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['EarOff']>
export const LazyLucideEarth: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Earth']>
export const LazyLucideEarthLock: LazyComponent<typeof import("../node_modules/lucide-vue-next")['EarthLock']>
export const LazyLucideEclipse: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Eclipse']>
export const LazyLucideEdit: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Edit']>
export const LazyLucideEdit2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Edit2']>
export const LazyLucideEdit3: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Edit3']>
export const LazyLucideEgg: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Egg']>
export const LazyLucideEggFried: LazyComponent<typeof import("../node_modules/lucide-vue-next")['EggFried']>
export const LazyLucideEggOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['EggOff']>
export const LazyLucideEllipsis: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Ellipsis']>
export const LazyLucideEllipsisVertical: LazyComponent<typeof import("../node_modules/lucide-vue-next")['EllipsisVertical']>
export const LazyLucideEqual: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Equal']>
export const LazyLucideEqualApproximately: LazyComponent<typeof import("../node_modules/lucide-vue-next")['EqualApproximately']>
export const LazyLucideEqualNot: LazyComponent<typeof import("../node_modules/lucide-vue-next")['EqualNot']>
export const LazyLucideEqualSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['EqualSquare']>
export const LazyLucideEraser: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Eraser']>
export const LazyLucideEthernetPort: LazyComponent<typeof import("../node_modules/lucide-vue-next")['EthernetPort']>
export const LazyLucideEuro: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Euro']>
export const LazyLucideExpand: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Expand']>
export const LazyLucideExternalLink: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ExternalLink']>
export const LazyLucideEye: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Eye']>
export const LazyLucideEyeClosed: LazyComponent<typeof import("../node_modules/lucide-vue-next")['EyeClosed']>
export const LazyLucideEyeOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['EyeOff']>
export const LazyLucideFacebook: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Facebook']>
export const LazyLucideFactory: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Factory']>
export const LazyLucideFan: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Fan']>
export const LazyLucideFastForward: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FastForward']>
export const LazyLucideFeather: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Feather']>
export const LazyLucideFence: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Fence']>
export const LazyLucideFerrisWheel: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FerrisWheel']>
export const LazyLucideFigma: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Figma']>
export const LazyLucideFile: LazyComponent<typeof import("../node_modules/lucide-vue-next")['File']>
export const LazyLucideFileArchive: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileArchive']>
export const LazyLucideFileAudio: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileAudio']>
export const LazyLucideFileAudio2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileAudio2']>
export const LazyLucideFileAxis3d: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileAxis3d']>
export const LazyLucideFileBadge: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileBadge']>
export const LazyLucideFileBadge2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileBadge2']>
export const LazyLucideFileBarChart: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileBarChart']>
export const LazyLucideFileBarChart2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileBarChart2']>
export const LazyLucideFileBox: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileBox']>
export const LazyLucideFileChartColumn: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileChartColumn']>
export const LazyLucideFileChartColumnIncreasing: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileChartColumnIncreasing']>
export const LazyLucideFileChartLine: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileChartLine']>
export const LazyLucideFileChartPie: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileChartPie']>
export const LazyLucideFileCheck: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileCheck']>
export const LazyLucideFileCheck2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileCheck2']>
export const LazyLucideFileClock: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileClock']>
export const LazyLucideFileCode: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileCode']>
export const LazyLucideFileCode2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileCode2']>
export const LazyLucideFileCog: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileCog']>
export const LazyLucideFileCog2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileCog2']>
export const LazyLucideFileDiff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileDiff']>
export const LazyLucideFileDigit: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileDigit']>
export const LazyLucideFileDown: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileDown']>
export const LazyLucideFileEdit: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileEdit']>
export const LazyLucideFileHeart: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileHeart']>
export const LazyLucideFileImage: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileImage']>
export const LazyLucideFileInput: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileInput']>
export const LazyLucideFileJson: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileJson']>
export const LazyLucideFileJson2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileJson2']>
export const LazyLucideFileKey: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileKey']>
export const LazyLucideFileKey2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileKey2']>
export const LazyLucideFileLineChart: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileLineChart']>
export const LazyLucideFileLock: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileLock']>
export const LazyLucideFileLock2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileLock2']>
export const LazyLucideFileMinus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileMinus']>
export const LazyLucideFileMinus2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileMinus2']>
export const LazyLucideFileMusic: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileMusic']>
export const LazyLucideFileOutput: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileOutput']>
export const LazyLucideFilePen: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FilePen']>
export const LazyLucideFilePenLine: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FilePenLine']>
export const LazyLucideFilePieChart: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FilePieChart']>
export const LazyLucideFilePlus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FilePlus']>
export const LazyLucideFilePlus2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FilePlus2']>
export const LazyLucideFileQuestion: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileQuestion']>
export const LazyLucideFileScan: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileScan']>
export const LazyLucideFileSearch: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileSearch']>
export const LazyLucideFileSearch2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileSearch2']>
export const LazyLucideFileSignature: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileSignature']>
export const LazyLucideFileSliders: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileSliders']>
export const LazyLucideFileSpreadsheet: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileSpreadsheet']>
export const LazyLucideFileStack: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileStack']>
export const LazyLucideFileSymlink: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileSymlink']>
export const LazyLucideFileTerminal: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileTerminal']>
export const LazyLucideFileText: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileText']>
export const LazyLucideFileType: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileType']>
export const LazyLucideFileType2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileType2']>
export const LazyLucideFileUp: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileUp']>
export const LazyLucideFileUser: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileUser']>
export const LazyLucideFileVideo: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileVideo']>
export const LazyLucideFileVideo2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileVideo2']>
export const LazyLucideFileVolume: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileVolume']>
export const LazyLucideFileVolume2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileVolume2']>
export const LazyLucideFileWarning: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileWarning']>
export const LazyLucideFileX: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileX']>
export const LazyLucideFileX2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FileX2']>
export const LazyLucideFiles: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Files']>
export const LazyLucideFilm: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Film']>
export const LazyLucideFilter: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Filter']>
export const LazyLucideFilterX: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FilterX']>
export const LazyLucideFingerprint: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Fingerprint']>
export const LazyLucideFireExtinguisher: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FireExtinguisher']>
export const LazyLucideFish: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Fish']>
export const LazyLucideFishOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FishOff']>
export const LazyLucideFishSymbol: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FishSymbol']>
export const LazyLucideFlag: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Flag']>
export const LazyLucideFlagOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FlagOff']>
export const LazyLucideFlagTriangleLeft: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FlagTriangleLeft']>
export const LazyLucideFlagTriangleRight: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FlagTriangleRight']>
export const LazyLucideFlame: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Flame']>
export const LazyLucideFlameKindling: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FlameKindling']>
export const LazyLucideFlashlight: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Flashlight']>
export const LazyLucideFlashlightOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FlashlightOff']>
export const LazyLucideFlaskConical: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FlaskConical']>
export const LazyLucideFlaskConicalOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FlaskConicalOff']>
export const LazyLucideFlaskRound: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FlaskRound']>
export const LazyLucideFlipHorizontal: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FlipHorizontal']>
export const LazyLucideFlipHorizontal2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FlipHorizontal2']>
export const LazyLucideFlipVertical: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FlipVertical']>
export const LazyLucideFlipVertical2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FlipVertical2']>
export const LazyLucideFlower: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Flower']>
export const LazyLucideFlower2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Flower2']>
export const LazyLucideFocus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Focus']>
export const LazyLucideFoldHorizontal: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FoldHorizontal']>
export const LazyLucideFoldVertical: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FoldVertical']>
export const LazyLucideFolder: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Folder']>
export const LazyLucideFolderArchive: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderArchive']>
export const LazyLucideFolderCheck: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderCheck']>
export const LazyLucideFolderClock: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderClock']>
export const LazyLucideFolderClosed: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderClosed']>
export const LazyLucideFolderCode: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderCode']>
export const LazyLucideFolderCog: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderCog']>
export const LazyLucideFolderCog2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderCog2']>
export const LazyLucideFolderDot: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderDot']>
export const LazyLucideFolderDown: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderDown']>
export const LazyLucideFolderEdit: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderEdit']>
export const LazyLucideFolderGit: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderGit']>
export const LazyLucideFolderGit2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderGit2']>
export const LazyLucideFolderHeart: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderHeart']>
export const LazyLucideFolderInput: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderInput']>
export const LazyLucideFolderKanban: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderKanban']>
export const LazyLucideFolderKey: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderKey']>
export const LazyLucideFolderLock: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderLock']>
export const LazyLucideFolderMinus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderMinus']>
export const LazyLucideFolderOpen: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderOpen']>
export const LazyLucideFolderOpenDot: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderOpenDot']>
export const LazyLucideFolderOutput: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderOutput']>
export const LazyLucideFolderPen: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderPen']>
export const LazyLucideFolderPlus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderPlus']>
export const LazyLucideFolderRoot: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderRoot']>
export const LazyLucideFolderSearch: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderSearch']>
export const LazyLucideFolderSearch2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderSearch2']>
export const LazyLucideFolderSymlink: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderSymlink']>
export const LazyLucideFolderSync: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderSync']>
export const LazyLucideFolderTree: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderTree']>
export const LazyLucideFolderUp: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderUp']>
export const LazyLucideFolderX: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FolderX']>
export const LazyLucideFolders: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Folders']>
export const LazyLucideFootprints: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Footprints']>
export const LazyLucideForkKnife: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ForkKnife']>
export const LazyLucideForkKnifeCrossed: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ForkKnifeCrossed']>
export const LazyLucideForklift: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Forklift']>
export const LazyLucideFormInput: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FormInput']>
export const LazyLucideForward: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Forward']>
export const LazyLucideFrame: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Frame']>
export const LazyLucideFramer: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Framer']>
export const LazyLucideFrown: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Frown']>
export const LazyLucideFuel: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Fuel']>
export const LazyLucideFullscreen: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Fullscreen']>
export const LazyLucideFunctionSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FunctionSquare']>
export const LazyLucideFunnel: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Funnel']>
export const LazyLucideFunnelPlus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FunnelPlus']>
export const LazyLucideFunnelX: LazyComponent<typeof import("../node_modules/lucide-vue-next")['FunnelX']>
export const LazyLucideGalleryHorizontal: LazyComponent<typeof import("../node_modules/lucide-vue-next")['GalleryHorizontal']>
export const LazyLucideGalleryHorizontalEnd: LazyComponent<typeof import("../node_modules/lucide-vue-next")['GalleryHorizontalEnd']>
export const LazyLucideGalleryThumbnails: LazyComponent<typeof import("../node_modules/lucide-vue-next")['GalleryThumbnails']>
export const LazyLucideGalleryVertical: LazyComponent<typeof import("../node_modules/lucide-vue-next")['GalleryVertical']>
export const LazyLucideGalleryVerticalEnd: LazyComponent<typeof import("../node_modules/lucide-vue-next")['GalleryVerticalEnd']>
export const LazyLucideGamepad: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Gamepad']>
export const LazyLucideGamepad2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Gamepad2']>
export const LazyLucideGanttChart: LazyComponent<typeof import("../node_modules/lucide-vue-next")['GanttChart']>
export const LazyLucideGanttChartSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['GanttChartSquare']>
export const LazyLucideGauge: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Gauge']>
export const LazyLucideGaugeCircle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['GaugeCircle']>
export const LazyLucideGavel: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Gavel']>
export const LazyLucideGem: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Gem']>
export const LazyLucideGhost: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Ghost']>
export const LazyLucideGift: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Gift']>
export const LazyLucideGitBranch: LazyComponent<typeof import("../node_modules/lucide-vue-next")['GitBranch']>
export const LazyLucideGitBranchPlus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['GitBranchPlus']>
export const LazyLucideGitCommit: LazyComponent<typeof import("../node_modules/lucide-vue-next")['GitCommit']>
export const LazyLucideGitCommitHorizontal: LazyComponent<typeof import("../node_modules/lucide-vue-next")['GitCommitHorizontal']>
export const LazyLucideGitCommitVertical: LazyComponent<typeof import("../node_modules/lucide-vue-next")['GitCommitVertical']>
export const LazyLucideGitCompare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['GitCompare']>
export const LazyLucideGitCompareArrows: LazyComponent<typeof import("../node_modules/lucide-vue-next")['GitCompareArrows']>
export const LazyLucideGitFork: LazyComponent<typeof import("../node_modules/lucide-vue-next")['GitFork']>
export const LazyLucideGitGraph: LazyComponent<typeof import("../node_modules/lucide-vue-next")['GitGraph']>
export const LazyLucideGitMerge: LazyComponent<typeof import("../node_modules/lucide-vue-next")['GitMerge']>
export const LazyLucideGitPullRequest: LazyComponent<typeof import("../node_modules/lucide-vue-next")['GitPullRequest']>
export const LazyLucideGitPullRequestArrow: LazyComponent<typeof import("../node_modules/lucide-vue-next")['GitPullRequestArrow']>
export const LazyLucideGitPullRequestClosed: LazyComponent<typeof import("../node_modules/lucide-vue-next")['GitPullRequestClosed']>
export const LazyLucideGitPullRequestCreate: LazyComponent<typeof import("../node_modules/lucide-vue-next")['GitPullRequestCreate']>
export const LazyLucideGitPullRequestCreateArrow: LazyComponent<typeof import("../node_modules/lucide-vue-next")['GitPullRequestCreateArrow']>
export const LazyLucideGitPullRequestDraft: LazyComponent<typeof import("../node_modules/lucide-vue-next")['GitPullRequestDraft']>
export const LazyLucideGithub: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Github']>
export const LazyLucideGitlab: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Gitlab']>
export const LazyLucideGlassWater: LazyComponent<typeof import("../node_modules/lucide-vue-next")['GlassWater']>
export const LazyLucideGlasses: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Glasses']>
export const LazyLucideGlobe: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Globe']>
export const LazyLucideGlobe2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Globe2']>
export const LazyLucideGlobeLock: LazyComponent<typeof import("../node_modules/lucide-vue-next")['GlobeLock']>
export const LazyLucideGoal: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Goal']>
export const LazyLucideGrab: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Grab']>
export const LazyLucideGraduationCap: LazyComponent<typeof import("../node_modules/lucide-vue-next")['GraduationCap']>
export const LazyLucideGrape: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Grape']>
export const LazyLucideGrid: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Grid']>
export const LazyLucideGrid2x2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Grid2x2']>
export const LazyLucideGrid2x2Check: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Grid2x2Check']>
export const LazyLucideGrid2x2Plus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Grid2x2Plus']>
export const LazyLucideGrid2x2X: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Grid2x2X']>
export const LazyLucideGrid3x3: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Grid3x3']>
export const LazyLucideGrip: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Grip']>
export const LazyLucideGripHorizontal: LazyComponent<typeof import("../node_modules/lucide-vue-next")['GripHorizontal']>
export const LazyLucideGripVertical: LazyComponent<typeof import("../node_modules/lucide-vue-next")['GripVertical']>
export const LazyLucideGroup: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Group']>
export const LazyLucideGuitar: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Guitar']>
export const LazyLucideHam: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Ham']>
export const LazyLucideHammer: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Hammer']>
export const LazyLucideHand: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Hand']>
export const LazyLucideHandCoins: LazyComponent<typeof import("../node_modules/lucide-vue-next")['HandCoins']>
export const LazyLucideHandHeart: LazyComponent<typeof import("../node_modules/lucide-vue-next")['HandHeart']>
export const LazyLucideHandHelping: LazyComponent<typeof import("../node_modules/lucide-vue-next")['HandHelping']>
export const LazyLucideHandMetal: LazyComponent<typeof import("../node_modules/lucide-vue-next")['HandMetal']>
export const LazyLucideHandPlatter: LazyComponent<typeof import("../node_modules/lucide-vue-next")['HandPlatter']>
export const LazyLucideHandshake: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Handshake']>
export const LazyLucideHardDrive: LazyComponent<typeof import("../node_modules/lucide-vue-next")['HardDrive']>
export const LazyLucideHardDriveDownload: LazyComponent<typeof import("../node_modules/lucide-vue-next")['HardDriveDownload']>
export const LazyLucideHardDriveUpload: LazyComponent<typeof import("../node_modules/lucide-vue-next")['HardDriveUpload']>
export const LazyLucideHardHat: LazyComponent<typeof import("../node_modules/lucide-vue-next")['HardHat']>
export const LazyLucideHash: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Hash']>
export const LazyLucideHaze: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Haze']>
export const LazyLucideHdmiPort: LazyComponent<typeof import("../node_modules/lucide-vue-next")['HdmiPort']>
export const LazyLucideHeading: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Heading']>
export const LazyLucideHeading1: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Heading1']>
export const LazyLucideHeading2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Heading2']>
export const LazyLucideHeading3: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Heading3']>
export const LazyLucideHeading4: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Heading4']>
export const LazyLucideHeading5: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Heading5']>
export const LazyLucideHeading6: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Heading6']>
export const LazyLucideHeadphoneOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['HeadphoneOff']>
export const LazyLucideHeadphones: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Headphones']>
export const LazyLucideHeadset: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Headset']>
export const LazyLucideHeart: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Heart']>
export const LazyLucideHeartCrack: LazyComponent<typeof import("../node_modules/lucide-vue-next")['HeartCrack']>
export const LazyLucideHeartHandshake: LazyComponent<typeof import("../node_modules/lucide-vue-next")['HeartHandshake']>
export const LazyLucideHeartOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['HeartOff']>
export const LazyLucideHeartPulse: LazyComponent<typeof import("../node_modules/lucide-vue-next")['HeartPulse']>
export const LazyLucideHeater: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Heater']>
export const LazyLucideHelpCircle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['HelpCircle']>
export const LazyLucideHelpingHand: LazyComponent<typeof import("../node_modules/lucide-vue-next")['HelpingHand']>
export const LazyLucideHexagon: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Hexagon']>
export const LazyLucideHighlighter: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Highlighter']>
export const LazyLucideHistory: LazyComponent<typeof import("../node_modules/lucide-vue-next")['History']>
export const LazyLucideHome: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Home']>
export const LazyLucideHop: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Hop']>
export const LazyLucideHopOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['HopOff']>
export const LazyLucideHospital: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Hospital']>
export const LazyLucideHotel: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Hotel']>
export const LazyLucideHourglass: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Hourglass']>
export const LazyLucideHouse: LazyComponent<typeof import("../node_modules/lucide-vue-next")['House']>
export const LazyLucideHousePlug: LazyComponent<typeof import("../node_modules/lucide-vue-next")['HousePlug']>
export const LazyLucideHousePlus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['HousePlus']>
export const LazyLucideHouseWifi: LazyComponent<typeof import("../node_modules/lucide-vue-next")['HouseWifi']>
export const LazyLucideIceCream: LazyComponent<typeof import("../node_modules/lucide-vue-next")['IceCream']>
export const LazyLucideIceCream2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['IceCream2']>
export const LazyLucideIceCreamBowl: LazyComponent<typeof import("../node_modules/lucide-vue-next")['IceCreamBowl']>
export const LazyLucideIceCreamCone: LazyComponent<typeof import("../node_modules/lucide-vue-next")['IceCreamCone']>
export const LazyLucideIdCard: LazyComponent<typeof import("../node_modules/lucide-vue-next")['IdCard']>
export const LazyLucideImage: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Image']>
export const LazyLucideImageDown: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ImageDown']>
export const LazyLucideImageMinus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ImageMinus']>
export const LazyLucideImageOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ImageOff']>
export const LazyLucideImagePlay: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ImagePlay']>
export const LazyLucideImagePlus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ImagePlus']>
export const LazyLucideImageUp: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ImageUp']>
export const LazyLucideImageUpscale: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ImageUpscale']>
export const LazyLucideImages: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Images']>
export const LazyLucideImport: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Import']>
export const LazyLucideInbox: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Inbox']>
export const LazyLucideIndent: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Indent']>
export const LazyLucideIndentDecrease: LazyComponent<typeof import("../node_modules/lucide-vue-next")['IndentDecrease']>
export const LazyLucideIndentIncrease: LazyComponent<typeof import("../node_modules/lucide-vue-next")['IndentIncrease']>
export const LazyLucideIndianRupee: LazyComponent<typeof import("../node_modules/lucide-vue-next")['IndianRupee']>
export const LazyLucideInfinity: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Infinity']>
export const LazyLucideInfo: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Info']>
export const LazyLucideInspect: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Inspect']>
export const LazyLucideInspectionPanel: LazyComponent<typeof import("../node_modules/lucide-vue-next")['InspectionPanel']>
export const LazyLucideInstagram: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Instagram']>
export const LazyLucideItalic: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Italic']>
export const LazyLucideIterationCcw: LazyComponent<typeof import("../node_modules/lucide-vue-next")['IterationCcw']>
export const LazyLucideIterationCw: LazyComponent<typeof import("../node_modules/lucide-vue-next")['IterationCw']>
export const LazyLucideJapaneseYen: LazyComponent<typeof import("../node_modules/lucide-vue-next")['JapaneseYen']>
export const LazyLucideJoystick: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Joystick']>
export const LazyLucideKanban: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Kanban']>
export const LazyLucideKanbanSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['KanbanSquare']>
export const LazyLucideKanbanSquareDashed: LazyComponent<typeof import("../node_modules/lucide-vue-next")['KanbanSquareDashed']>
export const LazyLucideKey: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Key']>
export const LazyLucideKeyRound: LazyComponent<typeof import("../node_modules/lucide-vue-next")['KeyRound']>
export const LazyLucideKeySquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['KeySquare']>
export const LazyLucideKeyboard: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Keyboard']>
export const LazyLucideKeyboardMusic: LazyComponent<typeof import("../node_modules/lucide-vue-next")['KeyboardMusic']>
export const LazyLucideKeyboardOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['KeyboardOff']>
export const LazyLucideLamp: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Lamp']>
export const LazyLucideLampCeiling: LazyComponent<typeof import("../node_modules/lucide-vue-next")['LampCeiling']>
export const LazyLucideLampDesk: LazyComponent<typeof import("../node_modules/lucide-vue-next")['LampDesk']>
export const LazyLucideLampFloor: LazyComponent<typeof import("../node_modules/lucide-vue-next")['LampFloor']>
export const LazyLucideLampWallDown: LazyComponent<typeof import("../node_modules/lucide-vue-next")['LampWallDown']>
export const LazyLucideLampWallUp: LazyComponent<typeof import("../node_modules/lucide-vue-next")['LampWallUp']>
export const LazyLucideLandPlot: LazyComponent<typeof import("../node_modules/lucide-vue-next")['LandPlot']>
export const LazyLucideLandmark: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Landmark']>
export const LazyLucideLanguages: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Languages']>
export const LazyLucideLaptop: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Laptop']>
export const LazyLucideLaptop2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Laptop2']>
export const LazyLucideLaptopMinimal: LazyComponent<typeof import("../node_modules/lucide-vue-next")['LaptopMinimal']>
export const LazyLucideLaptopMinimalCheck: LazyComponent<typeof import("../node_modules/lucide-vue-next")['LaptopMinimalCheck']>
export const LazyLucideLasso: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Lasso']>
export const LazyLucideLassoSelect: LazyComponent<typeof import("../node_modules/lucide-vue-next")['LassoSelect']>
export const LazyLucideLaugh: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Laugh']>
export const LazyLucideLayers: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Layers']>
export const LazyLucideLayers2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Layers2']>
export const LazyLucideLayers3: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Layers3']>
export const LazyLucideLayout: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Layout']>
export const LazyLucideLayoutDashboard: LazyComponent<typeof import("../node_modules/lucide-vue-next")['LayoutDashboard']>
export const LazyLucideLayoutGrid: LazyComponent<typeof import("../node_modules/lucide-vue-next")['LayoutGrid']>
export const LazyLucideLayoutList: LazyComponent<typeof import("../node_modules/lucide-vue-next")['LayoutList']>
export const LazyLucideLayoutPanelLeft: LazyComponent<typeof import("../node_modules/lucide-vue-next")['LayoutPanelLeft']>
export const LazyLucideLayoutPanelTop: LazyComponent<typeof import("../node_modules/lucide-vue-next")['LayoutPanelTop']>
export const LazyLucideLayoutTemplate: LazyComponent<typeof import("../node_modules/lucide-vue-next")['LayoutTemplate']>
export const LazyLucideLeaf: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Leaf']>
export const LazyLucideLeafyGreen: LazyComponent<typeof import("../node_modules/lucide-vue-next")['LeafyGreen']>
export const LazyLucideLectern: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Lectern']>
export const LazyLucideLetterText: LazyComponent<typeof import("../node_modules/lucide-vue-next")['LetterText']>
export const LazyLucideLibrary: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Library']>
export const LazyLucideLibraryBig: LazyComponent<typeof import("../node_modules/lucide-vue-next")['LibraryBig']>
export const LazyLucideLibrarySquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['LibrarySquare']>
export const LazyLucideLifeBuoy: LazyComponent<typeof import("../node_modules/lucide-vue-next")['LifeBuoy']>
export const LazyLucideLigature: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Ligature']>
export const LazyLucideLightbulb: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Lightbulb']>
export const LazyLucideLightbulbOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['LightbulbOff']>
export const LazyLucideLineChart: LazyComponent<typeof import("../node_modules/lucide-vue-next")['LineChart']>
export const LazyLucideLink: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Link']>
export const LazyLucideLink2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Link2']>
export const LazyLucideLink2Off: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Link2Off']>
export const LazyLucideLinkedin: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Linkedin']>
export const LazyLucideList: LazyComponent<typeof import("../node_modules/lucide-vue-next")['List']>
export const LazyLucideListCheck: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ListCheck']>
export const LazyLucideListChecks: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ListChecks']>
export const LazyLucideListCollapse: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ListCollapse']>
export const LazyLucideListEnd: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ListEnd']>
export const LazyLucideListFilter: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ListFilter']>
export const LazyLucideListFilterPlus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ListFilterPlus']>
export const LazyLucideListMinus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ListMinus']>
export const LazyLucideListMusic: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ListMusic']>
export const LazyLucideListOrdered: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ListOrdered']>
export const LazyLucideListPlus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ListPlus']>
export const LazyLucideListRestart: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ListRestart']>
export const LazyLucideListStart: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ListStart']>
export const LazyLucideListTodo: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ListTodo']>
export const LazyLucideListTree: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ListTree']>
export const LazyLucideListVideo: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ListVideo']>
export const LazyLucideListX: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ListX']>
export const LazyLucideLoader: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Loader']>
export const LazyLucideLoader2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Loader2']>
export const LazyLucideLoaderCircle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['LoaderCircle']>
export const LazyLucideLoaderPinwheel: LazyComponent<typeof import("../node_modules/lucide-vue-next")['LoaderPinwheel']>
export const LazyLucideLocate: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Locate']>
export const LazyLucideLocateFixed: LazyComponent<typeof import("../node_modules/lucide-vue-next")['LocateFixed']>
export const LazyLucideLocateOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['LocateOff']>
export const LazyLucideLock: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Lock']>
export const LazyLucideLockKeyhole: LazyComponent<typeof import("../node_modules/lucide-vue-next")['LockKeyhole']>
export const LazyLucideLockKeyholeOpen: LazyComponent<typeof import("../node_modules/lucide-vue-next")['LockKeyholeOpen']>
export const LazyLucideLockOpen: LazyComponent<typeof import("../node_modules/lucide-vue-next")['LockOpen']>
export const LazyLucideLogIn: LazyComponent<typeof import("../node_modules/lucide-vue-next")['LogIn']>
export const LazyLucideLogOut: LazyComponent<typeof import("../node_modules/lucide-vue-next")['LogOut']>
export const LazyLucideLogs: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Logs']>
export const LazyLucideLollipop: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Lollipop']>
export const LazyLucideLuggage: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Luggage']>
export const LazyLucideMSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MSquare']>
export const LazyLucideMagnet: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Magnet']>
export const LazyLucideMail: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Mail']>
export const LazyLucideMailCheck: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MailCheck']>
export const LazyLucideMailMinus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MailMinus']>
export const LazyLucideMailOpen: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MailOpen']>
export const LazyLucideMailPlus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MailPlus']>
export const LazyLucideMailQuestion: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MailQuestion']>
export const LazyLucideMailSearch: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MailSearch']>
export const LazyLucideMailWarning: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MailWarning']>
export const LazyLucideMailX: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MailX']>
export const LazyLucideMailbox: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Mailbox']>
export const LazyLucideMails: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Mails']>
export const LazyLucideMap: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Map']>
export const LazyLucideMapPin: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MapPin']>
export const LazyLucideMapPinCheck: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MapPinCheck']>
export const LazyLucideMapPinCheckInside: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MapPinCheckInside']>
export const LazyLucideMapPinHouse: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MapPinHouse']>
export const LazyLucideMapPinMinus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MapPinMinus']>
export const LazyLucideMapPinMinusInside: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MapPinMinusInside']>
export const LazyLucideMapPinOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MapPinOff']>
export const LazyLucideMapPinPlus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MapPinPlus']>
export const LazyLucideMapPinPlusInside: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MapPinPlusInside']>
export const LazyLucideMapPinX: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MapPinX']>
export const LazyLucideMapPinXInside: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MapPinXInside']>
export const LazyLucideMapPinned: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MapPinned']>
export const LazyLucideMapPlus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MapPlus']>
export const LazyLucideMars: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Mars']>
export const LazyLucideMarsStroke: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MarsStroke']>
export const LazyLucideMartini: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Martini']>
export const LazyLucideMaximize: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Maximize']>
export const LazyLucideMaximize2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Maximize2']>
export const LazyLucideMedal: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Medal']>
export const LazyLucideMegaphone: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Megaphone']>
export const LazyLucideMegaphoneOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MegaphoneOff']>
export const LazyLucideMeh: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Meh']>
export const LazyLucideMemoryStick: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MemoryStick']>
export const LazyLucideMenu: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Menu']>
export const LazyLucideMenuSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MenuSquare']>
export const LazyLucideMerge: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Merge']>
export const LazyLucideMessageCircle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageCircle']>
export const LazyLucideMessageCircleCode: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageCircleCode']>
export const LazyLucideMessageCircleDashed: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageCircleDashed']>
export const LazyLucideMessageCircleHeart: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageCircleHeart']>
export const LazyLucideMessageCircleMore: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageCircleMore']>
export const LazyLucideMessageCircleOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageCircleOff']>
export const LazyLucideMessageCirclePlus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageCirclePlus']>
export const LazyLucideMessageCircleQuestion: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageCircleQuestion']>
export const LazyLucideMessageCircleReply: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageCircleReply']>
export const LazyLucideMessageCircleWarning: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageCircleWarning']>
export const LazyLucideMessageCircleX: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageCircleX']>
export const LazyLucideMessageSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageSquare']>
export const LazyLucideMessageSquareCode: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageSquareCode']>
export const LazyLucideMessageSquareDashed: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageSquareDashed']>
export const LazyLucideMessageSquareDiff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageSquareDiff']>
export const LazyLucideMessageSquareDot: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageSquareDot']>
export const LazyLucideMessageSquareHeart: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageSquareHeart']>
export const LazyLucideMessageSquareLock: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageSquareLock']>
export const LazyLucideMessageSquareMore: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageSquareMore']>
export const LazyLucideMessageSquareOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageSquareOff']>
export const LazyLucideMessageSquarePlus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageSquarePlus']>
export const LazyLucideMessageSquareQuote: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageSquareQuote']>
export const LazyLucideMessageSquareReply: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageSquareReply']>
export const LazyLucideMessageSquareShare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageSquareShare']>
export const LazyLucideMessageSquareText: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageSquareText']>
export const LazyLucideMessageSquareWarning: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageSquareWarning']>
export const LazyLucideMessageSquareX: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessageSquareX']>
export const LazyLucideMessagesSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MessagesSquare']>
export const LazyLucideMic: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Mic']>
export const LazyLucideMic2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Mic2']>
export const LazyLucideMicOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MicOff']>
export const LazyLucideMicVocal: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MicVocal']>
export const LazyLucideMicrochip: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Microchip']>
export const LazyLucideMicroscope: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Microscope']>
export const LazyLucideMicrowave: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Microwave']>
export const LazyLucideMilestone: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Milestone']>
export const LazyLucideMilk: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Milk']>
export const LazyLucideMilkOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MilkOff']>
export const LazyLucideMinimize: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Minimize']>
export const LazyLucideMinimize2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Minimize2']>
export const LazyLucideMinus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Minus']>
export const LazyLucideMinusCircle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MinusCircle']>
export const LazyLucideMinusSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MinusSquare']>
export const LazyLucideMonitor: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Monitor']>
export const LazyLucideMonitorCheck: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MonitorCheck']>
export const LazyLucideMonitorCog: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MonitorCog']>
export const LazyLucideMonitorDot: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MonitorDot']>
export const LazyLucideMonitorDown: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MonitorDown']>
export const LazyLucideMonitorOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MonitorOff']>
export const LazyLucideMonitorPause: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MonitorPause']>
export const LazyLucideMonitorPlay: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MonitorPlay']>
export const LazyLucideMonitorSmartphone: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MonitorSmartphone']>
export const LazyLucideMonitorSpeaker: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MonitorSpeaker']>
export const LazyLucideMonitorStop: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MonitorStop']>
export const LazyLucideMonitorUp: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MonitorUp']>
export const LazyLucideMonitorX: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MonitorX']>
export const LazyLucideMoon: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Moon']>
export const LazyLucideMoonStar: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MoonStar']>
export const LazyLucideMoreHorizontal: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MoreHorizontal']>
export const LazyLucideMoreVertical: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MoreVertical']>
export const LazyLucideMountain: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Mountain']>
export const LazyLucideMountainSnow: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MountainSnow']>
export const LazyLucideMouse: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Mouse']>
export const LazyLucideMouseOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MouseOff']>
export const LazyLucideMousePointer: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MousePointer']>
export const LazyLucideMousePointer2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MousePointer2']>
export const LazyLucideMousePointerBan: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MousePointerBan']>
export const LazyLucideMousePointerClick: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MousePointerClick']>
export const LazyLucideMousePointerSquareDashed: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MousePointerSquareDashed']>
export const LazyLucideMove: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Move']>
export const LazyLucideMove3d: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Move3d']>
export const LazyLucideMoveDiagonal: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MoveDiagonal']>
export const LazyLucideMoveDiagonal2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MoveDiagonal2']>
export const LazyLucideMoveDown: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MoveDown']>
export const LazyLucideMoveDownLeft: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MoveDownLeft']>
export const LazyLucideMoveDownRight: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MoveDownRight']>
export const LazyLucideMoveHorizontal: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MoveHorizontal']>
export const LazyLucideMoveLeft: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MoveLeft']>
export const LazyLucideMoveRight: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MoveRight']>
export const LazyLucideMoveUp: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MoveUp']>
export const LazyLucideMoveUpLeft: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MoveUpLeft']>
export const LazyLucideMoveUpRight: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MoveUpRight']>
export const LazyLucideMoveVertical: LazyComponent<typeof import("../node_modules/lucide-vue-next")['MoveVertical']>
export const LazyLucideMusic: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Music']>
export const LazyLucideMusic2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Music2']>
export const LazyLucideMusic3: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Music3']>
export const LazyLucideMusic4: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Music4']>
export const LazyLucideNavigation: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Navigation']>
export const LazyLucideNavigation2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Navigation2']>
export const LazyLucideNavigation2Off: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Navigation2Off']>
export const LazyLucideNavigationOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['NavigationOff']>
export const LazyLucideNetwork: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Network']>
export const LazyLucideNewspaper: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Newspaper']>
export const LazyLucideNfc: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Nfc']>
export const LazyLucideNonBinary: LazyComponent<typeof import("../node_modules/lucide-vue-next")['NonBinary']>
export const LazyLucideNotebook: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Notebook']>
export const LazyLucideNotebookPen: LazyComponent<typeof import("../node_modules/lucide-vue-next")['NotebookPen']>
export const LazyLucideNotebookTabs: LazyComponent<typeof import("../node_modules/lucide-vue-next")['NotebookTabs']>
export const LazyLucideNotebookText: LazyComponent<typeof import("../node_modules/lucide-vue-next")['NotebookText']>
export const LazyLucideNotepadText: LazyComponent<typeof import("../node_modules/lucide-vue-next")['NotepadText']>
export const LazyLucideNotepadTextDashed: LazyComponent<typeof import("../node_modules/lucide-vue-next")['NotepadTextDashed']>
export const LazyLucideNut: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Nut']>
export const LazyLucideNutOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['NutOff']>
export const LazyLucideOctagon: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Octagon']>
export const LazyLucideOctagonAlert: LazyComponent<typeof import("../node_modules/lucide-vue-next")['OctagonAlert']>
export const LazyLucideOctagonMinus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['OctagonMinus']>
export const LazyLucideOctagonPause: LazyComponent<typeof import("../node_modules/lucide-vue-next")['OctagonPause']>
export const LazyLucideOctagonX: LazyComponent<typeof import("../node_modules/lucide-vue-next")['OctagonX']>
export const LazyLucideOmega: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Omega']>
export const LazyLucideOption: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Option']>
export const LazyLucideOrbit: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Orbit']>
export const LazyLucideOrigami: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Origami']>
export const LazyLucideOutdent: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Outdent']>
export const LazyLucidePackage: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Package']>
export const LazyLucidePackage2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Package2']>
export const LazyLucidePackageCheck: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PackageCheck']>
export const LazyLucidePackageMinus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PackageMinus']>
export const LazyLucidePackageOpen: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PackageOpen']>
export const LazyLucidePackagePlus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PackagePlus']>
export const LazyLucidePackageSearch: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PackageSearch']>
export const LazyLucidePackageX: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PackageX']>
export const LazyLucidePaintBucket: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PaintBucket']>
export const LazyLucidePaintRoller: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PaintRoller']>
export const LazyLucidePaintbrush: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Paintbrush']>
export const LazyLucidePaintbrush2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Paintbrush2']>
export const LazyLucidePaintbrushVertical: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PaintbrushVertical']>
export const LazyLucidePalette: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Palette']>
export const LazyLucidePalmtree: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Palmtree']>
export const LazyLucidePanelBottom: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelBottom']>
export const LazyLucidePanelBottomClose: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelBottomClose']>
export const LazyLucidePanelBottomDashed: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelBottomDashed']>
export const LazyLucidePanelBottomInactive: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelBottomInactive']>
export const LazyLucidePanelBottomOpen: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelBottomOpen']>
export const LazyLucidePanelLeft: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelLeft']>
export const LazyLucidePanelLeftClose: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelLeftClose']>
export const LazyLucidePanelLeftDashed: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelLeftDashed']>
export const LazyLucidePanelLeftInactive: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelLeftInactive']>
export const LazyLucidePanelLeftOpen: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelLeftOpen']>
export const LazyLucidePanelRight: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelRight']>
export const LazyLucidePanelRightClose: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelRightClose']>
export const LazyLucidePanelRightDashed: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelRightDashed']>
export const LazyLucidePanelRightInactive: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelRightInactive']>
export const LazyLucidePanelRightOpen: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelRightOpen']>
export const LazyLucidePanelTop: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelTop']>
export const LazyLucidePanelTopClose: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelTopClose']>
export const LazyLucidePanelTopDashed: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelTopDashed']>
export const LazyLucidePanelTopInactive: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelTopInactive']>
export const LazyLucidePanelTopOpen: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelTopOpen']>
export const LazyLucidePanelsLeftBottom: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelsLeftBottom']>
export const LazyLucidePanelsLeftRight: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelsLeftRight']>
export const LazyLucidePanelsRightBottom: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelsRightBottom']>
export const LazyLucidePanelsTopBottom: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelsTopBottom']>
export const LazyLucidePanelsTopLeft: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PanelsTopLeft']>
export const LazyLucidePaperclip: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Paperclip']>
export const LazyLucideParentheses: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Parentheses']>
export const LazyLucideParkingCircle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ParkingCircle']>
export const LazyLucideParkingCircleOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ParkingCircleOff']>
export const LazyLucideParkingMeter: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ParkingMeter']>
export const LazyLucideParkingSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ParkingSquare']>
export const LazyLucideParkingSquareOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ParkingSquareOff']>
export const LazyLucidePartyPopper: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PartyPopper']>
export const LazyLucidePause: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Pause']>
export const LazyLucidePauseCircle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PauseCircle']>
export const LazyLucidePauseOctagon: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PauseOctagon']>
export const LazyLucidePawPrint: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PawPrint']>
export const LazyLucidePcCase: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PcCase']>
export const LazyLucidePen: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Pen']>
export const LazyLucidePenBox: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PenBox']>
export const LazyLucidePenLine: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PenLine']>
export const LazyLucidePenOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PenOff']>
export const LazyLucidePenSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PenSquare']>
export const LazyLucidePenTool: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PenTool']>
export const LazyLucidePencil: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Pencil']>
export const LazyLucidePencilLine: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PencilLine']>
export const LazyLucidePencilOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PencilOff']>
export const LazyLucidePencilRuler: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PencilRuler']>
export const LazyLucidePentagon: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Pentagon']>
export const LazyLucidePercent: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Percent']>
export const LazyLucidePercentCircle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PercentCircle']>
export const LazyLucidePercentDiamond: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PercentDiamond']>
export const LazyLucidePercentSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PercentSquare']>
export const LazyLucidePersonStanding: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PersonStanding']>
export const LazyLucidePhilippinePeso: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PhilippinePeso']>
export const LazyLucidePhone: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Phone']>
export const LazyLucidePhoneCall: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PhoneCall']>
export const LazyLucidePhoneForwarded: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PhoneForwarded']>
export const LazyLucidePhoneIncoming: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PhoneIncoming']>
export const LazyLucidePhoneMissed: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PhoneMissed']>
export const LazyLucidePhoneOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PhoneOff']>
export const LazyLucidePhoneOutgoing: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PhoneOutgoing']>
export const LazyLucidePi: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Pi']>
export const LazyLucidePiSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PiSquare']>
export const LazyLucidePiano: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Piano']>
export const LazyLucidePickaxe: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Pickaxe']>
export const LazyLucidePictureInPicture: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PictureInPicture']>
export const LazyLucidePictureInPicture2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PictureInPicture2']>
export const LazyLucidePieChart: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PieChart']>
export const LazyLucidePiggyBank: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PiggyBank']>
export const LazyLucidePilcrow: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Pilcrow']>
export const LazyLucidePilcrowLeft: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PilcrowLeft']>
export const LazyLucidePilcrowRight: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PilcrowRight']>
export const LazyLucidePilcrowSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PilcrowSquare']>
export const LazyLucidePill: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Pill']>
export const LazyLucidePillBottle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PillBottle']>
export const LazyLucidePin: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Pin']>
export const LazyLucidePinOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PinOff']>
export const LazyLucidePipette: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Pipette']>
export const LazyLucidePizza: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Pizza']>
export const LazyLucidePlane: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Plane']>
export const LazyLucidePlaneLanding: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PlaneLanding']>
export const LazyLucidePlaneTakeoff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PlaneTakeoff']>
export const LazyLucidePlay: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Play']>
export const LazyLucidePlayCircle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PlayCircle']>
export const LazyLucidePlaySquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PlaySquare']>
export const LazyLucidePlug: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Plug']>
export const LazyLucidePlug2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Plug2']>
export const LazyLucidePlugZap: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PlugZap']>
export const LazyLucidePlugZap2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PlugZap2']>
export const LazyLucidePlus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Plus']>
export const LazyLucidePlusCircle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PlusCircle']>
export const LazyLucidePlusSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PlusSquare']>
export const LazyLucidePocket: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Pocket']>
export const LazyLucidePocketKnife: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PocketKnife']>
export const LazyLucidePodcast: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Podcast']>
export const LazyLucidePointer: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Pointer']>
export const LazyLucidePointerOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PointerOff']>
export const LazyLucidePopcorn: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Popcorn']>
export const LazyLucidePopsicle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Popsicle']>
export const LazyLucidePoundSterling: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PoundSterling']>
export const LazyLucidePower: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Power']>
export const LazyLucidePowerCircle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PowerCircle']>
export const LazyLucidePowerOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PowerOff']>
export const LazyLucidePowerSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PowerSquare']>
export const LazyLucidePresentation: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Presentation']>
export const LazyLucidePrinter: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Printer']>
export const LazyLucidePrinterCheck: LazyComponent<typeof import("../node_modules/lucide-vue-next")['PrinterCheck']>
export const LazyLucideProjector: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Projector']>
export const LazyLucideProportions: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Proportions']>
export const LazyLucidePuzzle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Puzzle']>
export const LazyLucidePyramid: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Pyramid']>
export const LazyLucideQrCode: LazyComponent<typeof import("../node_modules/lucide-vue-next")['QrCode']>
export const LazyLucideQuote: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Quote']>
export const LazyLucideRabbit: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Rabbit']>
export const LazyLucideRadar: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Radar']>
export const LazyLucideRadiation: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Radiation']>
export const LazyLucideRadical: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Radical']>
export const LazyLucideRadio: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Radio']>
export const LazyLucideRadioReceiver: LazyComponent<typeof import("../node_modules/lucide-vue-next")['RadioReceiver']>
export const LazyLucideRadioTower: LazyComponent<typeof import("../node_modules/lucide-vue-next")['RadioTower']>
export const LazyLucideRadius: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Radius']>
export const LazyLucideRailSymbol: LazyComponent<typeof import("../node_modules/lucide-vue-next")['RailSymbol']>
export const LazyLucideRainbow: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Rainbow']>
export const LazyLucideRat: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Rat']>
export const LazyLucideRatio: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Ratio']>
export const LazyLucideReceipt: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Receipt']>
export const LazyLucideReceiptCent: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ReceiptCent']>
export const LazyLucideReceiptEuro: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ReceiptEuro']>
export const LazyLucideReceiptIndianRupee: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ReceiptIndianRupee']>
export const LazyLucideReceiptJapaneseYen: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ReceiptJapaneseYen']>
export const LazyLucideReceiptPoundSterling: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ReceiptPoundSterling']>
export const LazyLucideReceiptRussianRuble: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ReceiptRussianRuble']>
export const LazyLucideReceiptSwissFranc: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ReceiptSwissFranc']>
export const LazyLucideReceiptText: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ReceiptText']>
export const LazyLucideRectangleEllipsis: LazyComponent<typeof import("../node_modules/lucide-vue-next")['RectangleEllipsis']>
export const LazyLucideRectangleHorizontal: LazyComponent<typeof import("../node_modules/lucide-vue-next")['RectangleHorizontal']>
export const LazyLucideRectangleVertical: LazyComponent<typeof import("../node_modules/lucide-vue-next")['RectangleVertical']>
export const LazyLucideRecycle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Recycle']>
export const LazyLucideRedo: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Redo']>
export const LazyLucideRedo2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Redo2']>
export const LazyLucideRedoDot: LazyComponent<typeof import("../node_modules/lucide-vue-next")['RedoDot']>
export const LazyLucideRefreshCcw: LazyComponent<typeof import("../node_modules/lucide-vue-next")['RefreshCcw']>
export const LazyLucideRefreshCcwDot: LazyComponent<typeof import("../node_modules/lucide-vue-next")['RefreshCcwDot']>
export const LazyLucideRefreshCw: LazyComponent<typeof import("../node_modules/lucide-vue-next")['RefreshCw']>
export const LazyLucideRefreshCwOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['RefreshCwOff']>
export const LazyLucideRefrigerator: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Refrigerator']>
export const LazyLucideRegex: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Regex']>
export const LazyLucideRemoveFormatting: LazyComponent<typeof import("../node_modules/lucide-vue-next")['RemoveFormatting']>
export const LazyLucideRepeat: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Repeat']>
export const LazyLucideRepeat1: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Repeat1']>
export const LazyLucideRepeat2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Repeat2']>
export const LazyLucideReplace: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Replace']>
export const LazyLucideReplaceAll: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ReplaceAll']>
export const LazyLucideReply: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Reply']>
export const LazyLucideReplyAll: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ReplyAll']>
export const LazyLucideRewind: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Rewind']>
export const LazyLucideRibbon: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Ribbon']>
export const LazyLucideRocket: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Rocket']>
export const LazyLucideRockingChair: LazyComponent<typeof import("../node_modules/lucide-vue-next")['RockingChair']>
export const LazyLucideRollerCoaster: LazyComponent<typeof import("../node_modules/lucide-vue-next")['RollerCoaster']>
export const LazyLucideRotate3d: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Rotate3d']>
export const LazyLucideRotateCcw: LazyComponent<typeof import("../node_modules/lucide-vue-next")['RotateCcw']>
export const LazyLucideRotateCcwSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['RotateCcwSquare']>
export const LazyLucideRotateCw: LazyComponent<typeof import("../node_modules/lucide-vue-next")['RotateCw']>
export const LazyLucideRotateCwSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['RotateCwSquare']>
export const LazyLucideRoute: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Route']>
export const LazyLucideRouteOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['RouteOff']>
export const LazyLucideRouter: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Router']>
export const LazyLucideRows: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Rows']>
export const LazyLucideRows2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Rows2']>
export const LazyLucideRows3: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Rows3']>
export const LazyLucideRows4: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Rows4']>
export const LazyLucideRss: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Rss']>
export const LazyLucideRuler: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Ruler']>
export const LazyLucideRussianRuble: LazyComponent<typeof import("../node_modules/lucide-vue-next")['RussianRuble']>
export const LazyLucideSailboat: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Sailboat']>
export const LazyLucideSalad: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Salad']>
export const LazyLucideSandwich: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Sandwich']>
export const LazyLucideSatellite: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Satellite']>
export const LazyLucideSatelliteDish: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SatelliteDish']>
export const LazyLucideSaudiRiyal: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SaudiRiyal']>
export const LazyLucideSave: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Save']>
export const LazyLucideSaveAll: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SaveAll']>
export const LazyLucideSaveOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SaveOff']>
export const LazyLucideScale: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Scale']>
export const LazyLucideScale3d: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Scale3d']>
export const LazyLucideScaling: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Scaling']>
export const LazyLucideScan: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Scan']>
export const LazyLucideScanBarcode: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ScanBarcode']>
export const LazyLucideScanEye: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ScanEye']>
export const LazyLucideScanFace: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ScanFace']>
export const LazyLucideScanHeart: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ScanHeart']>
export const LazyLucideScanLine: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ScanLine']>
export const LazyLucideScanQrCode: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ScanQrCode']>
export const LazyLucideScanSearch: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ScanSearch']>
export const LazyLucideScanText: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ScanText']>
export const LazyLucideScatterChart: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ScatterChart']>
export const LazyLucideSchool: LazyComponent<typeof import("../node_modules/lucide-vue-next")['School']>
export const LazyLucideSchool2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['School2']>
export const LazyLucideScissors: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Scissors']>
export const LazyLucideScissorsLineDashed: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ScissorsLineDashed']>
export const LazyLucideScissorsSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ScissorsSquare']>
export const LazyLucideScissorsSquareDashedBottom: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ScissorsSquareDashedBottom']>
export const LazyLucideScreenShare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ScreenShare']>
export const LazyLucideScreenShareOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ScreenShareOff']>
export const LazyLucideScroll: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Scroll']>
export const LazyLucideScrollText: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ScrollText']>
export const LazyLucideSearch: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Search']>
export const LazyLucideSearchCheck: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SearchCheck']>
export const LazyLucideSearchCode: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SearchCode']>
export const LazyLucideSearchSlash: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SearchSlash']>
export const LazyLucideSearchX: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SearchX']>
export const LazyLucideSection: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Section']>
export const LazyLucideSend: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Send']>
export const LazyLucideSendHorizonal: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SendHorizonal']>
export const LazyLucideSendHorizontal: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SendHorizontal']>
export const LazyLucideSendToBack: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SendToBack']>
export const LazyLucideSeparatorHorizontal: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SeparatorHorizontal']>
export const LazyLucideSeparatorVertical: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SeparatorVertical']>
export const LazyLucideServer: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Server']>
export const LazyLucideServerCog: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ServerCog']>
export const LazyLucideServerCrash: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ServerCrash']>
export const LazyLucideServerOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ServerOff']>
export const LazyLucideSettings: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Settings']>
export const LazyLucideSettings2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Settings2']>
export const LazyLucideShapes: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Shapes']>
export const LazyLucideShare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Share']>
export const LazyLucideShare2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Share2']>
export const LazyLucideSheet: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Sheet']>
export const LazyLucideShell: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Shell']>
export const LazyLucideShield: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Shield']>
export const LazyLucideShieldAlert: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ShieldAlert']>
export const LazyLucideShieldBan: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ShieldBan']>
export const LazyLucideShieldCheck: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ShieldCheck']>
export const LazyLucideShieldClose: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ShieldClose']>
export const LazyLucideShieldEllipsis: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ShieldEllipsis']>
export const LazyLucideShieldHalf: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ShieldHalf']>
export const LazyLucideShieldMinus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ShieldMinus']>
export const LazyLucideShieldOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ShieldOff']>
export const LazyLucideShieldPlus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ShieldPlus']>
export const LazyLucideShieldQuestion: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ShieldQuestion']>
export const LazyLucideShieldUser: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ShieldUser']>
export const LazyLucideShieldX: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ShieldX']>
export const LazyLucideShip: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Ship']>
export const LazyLucideShipWheel: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ShipWheel']>
export const LazyLucideShirt: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Shirt']>
export const LazyLucideShoppingBag: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ShoppingBag']>
export const LazyLucideShoppingBasket: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ShoppingBasket']>
export const LazyLucideShoppingCart: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ShoppingCart']>
export const LazyLucideShovel: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Shovel']>
export const LazyLucideShowerHead: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ShowerHead']>
export const LazyLucideShrimp: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Shrimp']>
export const LazyLucideShrink: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Shrink']>
export const LazyLucideShrub: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Shrub']>
export const LazyLucideShuffle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Shuffle']>
export const LazyLucideSidebar: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Sidebar']>
export const LazyLucideSidebarClose: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SidebarClose']>
export const LazyLucideSidebarOpen: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SidebarOpen']>
export const LazyLucideSigma: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Sigma']>
export const LazyLucideSigmaSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SigmaSquare']>
export const LazyLucideSignal: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Signal']>
export const LazyLucideSignalHigh: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SignalHigh']>
export const LazyLucideSignalLow: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SignalLow']>
export const LazyLucideSignalMedium: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SignalMedium']>
export const LazyLucideSignalZero: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SignalZero']>
export const LazyLucideSignature: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Signature']>
export const LazyLucideSignpost: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Signpost']>
export const LazyLucideSignpostBig: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SignpostBig']>
export const LazyLucideSiren: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Siren']>
export const LazyLucideSkipBack: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SkipBack']>
export const LazyLucideSkipForward: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SkipForward']>
export const LazyLucideSkull: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Skull']>
export const LazyLucideSlack: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Slack']>
export const LazyLucideSlash: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Slash']>
export const LazyLucideSlashSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SlashSquare']>
export const LazyLucideSlice: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Slice']>
export const LazyLucideSliders: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Sliders']>
export const LazyLucideSlidersHorizontal: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SlidersHorizontal']>
export const LazyLucideSlidersVertical: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SlidersVertical']>
export const LazyLucideSmartphone: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Smartphone']>
export const LazyLucideSmartphoneCharging: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SmartphoneCharging']>
export const LazyLucideSmartphoneNfc: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SmartphoneNfc']>
export const LazyLucideSmile: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Smile']>
export const LazyLucideSmilePlus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SmilePlus']>
export const LazyLucideSnail: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Snail']>
export const LazyLucideSnowflake: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Snowflake']>
export const LazyLucideSofa: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Sofa']>
export const LazyLucideSortAsc: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SortAsc']>
export const LazyLucideSortDesc: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SortDesc']>
export const LazyLucideSoup: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Soup']>
export const LazyLucideSpace: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Space']>
export const LazyLucideSpade: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Spade']>
export const LazyLucideSparkle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Sparkle']>
export const LazyLucideSparkles: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Sparkles']>
export const LazyLucideSpeaker: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Speaker']>
export const LazyLucideSpeech: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Speech']>
export const LazyLucideSpellCheck: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SpellCheck']>
export const LazyLucideSpellCheck2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SpellCheck2']>
export const LazyLucideSpline: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Spline']>
export const LazyLucideSplinePointer: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SplinePointer']>
export const LazyLucideSplit: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Split']>
export const LazyLucideSplitSquareHorizontal: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SplitSquareHorizontal']>
export const LazyLucideSplitSquareVertical: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SplitSquareVertical']>
export const LazyLucideSprayCan: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SprayCan']>
export const LazyLucideSprout: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Sprout']>
export const LazyLucideSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Square']>
export const LazyLucideSquareActivity: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareActivity']>
export const LazyLucideSquareArrowDown: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareArrowDown']>
export const LazyLucideSquareArrowDownLeft: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareArrowDownLeft']>
export const LazyLucideSquareArrowDownRight: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareArrowDownRight']>
export const LazyLucideSquareArrowLeft: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareArrowLeft']>
export const LazyLucideSquareArrowOutDownLeft: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareArrowOutDownLeft']>
export const LazyLucideSquareArrowOutDownRight: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareArrowOutDownRight']>
export const LazyLucideSquareArrowOutUpLeft: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareArrowOutUpLeft']>
export const LazyLucideSquareArrowOutUpRight: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareArrowOutUpRight']>
export const LazyLucideSquareArrowRight: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareArrowRight']>
export const LazyLucideSquareArrowUp: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareArrowUp']>
export const LazyLucideSquareArrowUpLeft: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareArrowUpLeft']>
export const LazyLucideSquareArrowUpRight: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareArrowUpRight']>
export const LazyLucideSquareAsterisk: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareAsterisk']>
export const LazyLucideSquareBottomDashedScissors: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareBottomDashedScissors']>
export const LazyLucideSquareChartGantt: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareChartGantt']>
export const LazyLucideSquareCheck: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareCheck']>
export const LazyLucideSquareCheckBig: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareCheckBig']>
export const LazyLucideSquareChevronDown: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareChevronDown']>
export const LazyLucideSquareChevronLeft: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareChevronLeft']>
export const LazyLucideSquareChevronRight: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareChevronRight']>
export const LazyLucideSquareChevronUp: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareChevronUp']>
export const LazyLucideSquareCode: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareCode']>
export const LazyLucideSquareDashed: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareDashed']>
export const LazyLucideSquareDashedBottom: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareDashedBottom']>
export const LazyLucideSquareDashedBottomCode: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareDashedBottomCode']>
export const LazyLucideSquareDashedKanban: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareDashedKanban']>
export const LazyLucideSquareDashedMousePointer: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareDashedMousePointer']>
export const LazyLucideSquareDivide: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareDivide']>
export const LazyLucideSquareDot: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareDot']>
export const LazyLucideSquareEqual: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareEqual']>
export const LazyLucideSquareFunction: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareFunction']>
export const LazyLucideSquareGanttChart: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareGanttChart']>
export const LazyLucideSquareKanban: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareKanban']>
export const LazyLucideSquareLibrary: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareLibrary']>
export const LazyLucideSquareM: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareM']>
export const LazyLucideSquareMenu: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareMenu']>
export const LazyLucideSquareMinus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareMinus']>
export const LazyLucideSquareMousePointer: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareMousePointer']>
export const LazyLucideSquareParking: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareParking']>
export const LazyLucideSquareParkingOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareParkingOff']>
export const LazyLucideSquarePen: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquarePen']>
export const LazyLucideSquarePercent: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquarePercent']>
export const LazyLucideSquarePi: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquarePi']>
export const LazyLucideSquarePilcrow: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquarePilcrow']>
export const LazyLucideSquarePlay: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquarePlay']>
export const LazyLucideSquarePlus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquarePlus']>
export const LazyLucideSquarePower: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquarePower']>
export const LazyLucideSquareRadical: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareRadical']>
export const LazyLucideSquareRoundCorner: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareRoundCorner']>
export const LazyLucideSquareScissors: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareScissors']>
export const LazyLucideSquareSigma: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareSigma']>
export const LazyLucideSquareSlash: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareSlash']>
export const LazyLucideSquareSplitHorizontal: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareSplitHorizontal']>
export const LazyLucideSquareSplitVertical: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareSplitVertical']>
export const LazyLucideSquareSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareSquare']>
export const LazyLucideSquareStack: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareStack']>
export const LazyLucideSquareTerminal: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareTerminal']>
export const LazyLucideSquareUser: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareUser']>
export const LazyLucideSquareUserRound: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareUserRound']>
export const LazyLucideSquareX: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SquareX']>
export const LazyLucideSquircle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Squircle']>
export const LazyLucideSquirrel: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Squirrel']>
export const LazyLucideStamp: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Stamp']>
export const LazyLucideStar: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Star']>
export const LazyLucideStarHalf: LazyComponent<typeof import("../node_modules/lucide-vue-next")['StarHalf']>
export const LazyLucideStarOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['StarOff']>
export const LazyLucideStars: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Stars']>
export const LazyLucideStepBack: LazyComponent<typeof import("../node_modules/lucide-vue-next")['StepBack']>
export const LazyLucideStepForward: LazyComponent<typeof import("../node_modules/lucide-vue-next")['StepForward']>
export const LazyLucideStethoscope: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Stethoscope']>
export const LazyLucideSticker: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Sticker']>
export const LazyLucideStickyNote: LazyComponent<typeof import("../node_modules/lucide-vue-next")['StickyNote']>
export const LazyLucideStopCircle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['StopCircle']>
export const LazyLucideStore: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Store']>
export const LazyLucideStretchHorizontal: LazyComponent<typeof import("../node_modules/lucide-vue-next")['StretchHorizontal']>
export const LazyLucideStretchVertical: LazyComponent<typeof import("../node_modules/lucide-vue-next")['StretchVertical']>
export const LazyLucideStrikethrough: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Strikethrough']>
export const LazyLucideSubscript: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Subscript']>
export const LazyLucideSubtitles: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Subtitles']>
export const LazyLucideSun: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Sun']>
export const LazyLucideSunDim: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SunDim']>
export const LazyLucideSunMedium: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SunMedium']>
export const LazyLucideSunMoon: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SunMoon']>
export const LazyLucideSunSnow: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SunSnow']>
export const LazyLucideSunrise: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Sunrise']>
export const LazyLucideSunset: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Sunset']>
export const LazyLucideSuperscript: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Superscript']>
export const LazyLucideSwatchBook: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SwatchBook']>
export const LazyLucideSwissFranc: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SwissFranc']>
export const LazyLucideSwitchCamera: LazyComponent<typeof import("../node_modules/lucide-vue-next")['SwitchCamera']>
export const LazyLucideSword: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Sword']>
export const LazyLucideSwords: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Swords']>
export const LazyLucideSyringe: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Syringe']>
export const LazyLucideTable: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Table']>
export const LazyLucideTable2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Table2']>
export const LazyLucideTableCellsMerge: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TableCellsMerge']>
export const LazyLucideTableCellsSplit: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TableCellsSplit']>
export const LazyLucideTableColumnsSplit: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TableColumnsSplit']>
export const LazyLucideTableOfContents: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TableOfContents']>
export const LazyLucideTableProperties: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TableProperties']>
export const LazyLucideTableRowsSplit: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TableRowsSplit']>
export const LazyLucideTablet: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Tablet']>
export const LazyLucideTabletSmartphone: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TabletSmartphone']>
export const LazyLucideTablets: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Tablets']>
export const LazyLucideTag: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Tag']>
export const LazyLucideTags: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Tags']>
export const LazyLucideTally1: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Tally1']>
export const LazyLucideTally2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Tally2']>
export const LazyLucideTally3: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Tally3']>
export const LazyLucideTally4: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Tally4']>
export const LazyLucideTally5: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Tally5']>
export const LazyLucideTangent: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Tangent']>
export const LazyLucideTarget: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Target']>
export const LazyLucideTelescope: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Telescope']>
export const LazyLucideTent: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Tent']>
export const LazyLucideTentTree: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TentTree']>
export const LazyLucideTerminal: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Terminal']>
export const LazyLucideTerminalSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TerminalSquare']>
export const LazyLucideTestTube: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TestTube']>
export const LazyLucideTestTube2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TestTube2']>
export const LazyLucideTestTubeDiagonal: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TestTubeDiagonal']>
export const LazyLucideTestTubes: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TestTubes']>
export const LazyLucideText: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Text']>
export const LazyLucideTextCursor: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TextCursor']>
export const LazyLucideTextCursorInput: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TextCursorInput']>
export const LazyLucideTextQuote: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TextQuote']>
export const LazyLucideTextSearch: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TextSearch']>
export const LazyLucideTextSelect: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TextSelect']>
export const LazyLucideTextSelection: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TextSelection']>
export const LazyLucideTheater: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Theater']>
export const LazyLucideThermometer: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Thermometer']>
export const LazyLucideThermometerSnowflake: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ThermometerSnowflake']>
export const LazyLucideThermometerSun: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ThermometerSun']>
export const LazyLucideThumbsDown: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ThumbsDown']>
export const LazyLucideThumbsUp: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ThumbsUp']>
export const LazyLucideTicket: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Ticket']>
export const LazyLucideTicketCheck: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TicketCheck']>
export const LazyLucideTicketMinus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TicketMinus']>
export const LazyLucideTicketPercent: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TicketPercent']>
export const LazyLucideTicketPlus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TicketPlus']>
export const LazyLucideTicketSlash: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TicketSlash']>
export const LazyLucideTicketX: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TicketX']>
export const LazyLucideTickets: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Tickets']>
export const LazyLucideTicketsPlane: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TicketsPlane']>
export const LazyLucideTimer: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Timer']>
export const LazyLucideTimerOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TimerOff']>
export const LazyLucideTimerReset: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TimerReset']>
export const LazyLucideToggleLeft: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ToggleLeft']>
export const LazyLucideToggleRight: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ToggleRight']>
export const LazyLucideToilet: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Toilet']>
export const LazyLucideTornado: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Tornado']>
export const LazyLucideTorus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Torus']>
export const LazyLucideTouchpad: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Touchpad']>
export const LazyLucideTouchpadOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TouchpadOff']>
export const LazyLucideTowerControl: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TowerControl']>
export const LazyLucideToyBrick: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ToyBrick']>
export const LazyLucideTractor: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Tractor']>
export const LazyLucideTrafficCone: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TrafficCone']>
export const LazyLucideTrain: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Train']>
export const LazyLucideTrainFront: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TrainFront']>
export const LazyLucideTrainFrontTunnel: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TrainFrontTunnel']>
export const LazyLucideTrainTrack: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TrainTrack']>
export const LazyLucideTramFront: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TramFront']>
export const LazyLucideTransgender: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Transgender']>
export const LazyLucideTrash: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Trash']>
export const LazyLucideTrash2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Trash2']>
export const LazyLucideTreeDeciduous: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TreeDeciduous']>
export const LazyLucideTreePalm: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TreePalm']>
export const LazyLucideTreePine: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TreePine']>
export const LazyLucideTrees: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Trees']>
export const LazyLucideTrello: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Trello']>
export const LazyLucideTrendingDown: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TrendingDown']>
export const LazyLucideTrendingUp: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TrendingUp']>
export const LazyLucideTrendingUpDown: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TrendingUpDown']>
export const LazyLucideTriangle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Triangle']>
export const LazyLucideTriangleAlert: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TriangleAlert']>
export const LazyLucideTriangleDashed: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TriangleDashed']>
export const LazyLucideTriangleRight: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TriangleRight']>
export const LazyLucideTrophy: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Trophy']>
export const LazyLucideTruck: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Truck']>
export const LazyLucideTurtle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Turtle']>
export const LazyLucideTv: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Tv']>
export const LazyLucideTv2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Tv2']>
export const LazyLucideTvMinimal: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TvMinimal']>
export const LazyLucideTvMinimalPlay: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TvMinimalPlay']>
export const LazyLucideTwitch: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Twitch']>
export const LazyLucideTwitter: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Twitter']>
export const LazyLucideType: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Type']>
export const LazyLucideTypeOutline: LazyComponent<typeof import("../node_modules/lucide-vue-next")['TypeOutline']>
export const LazyLucideUmbrella: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Umbrella']>
export const LazyLucideUmbrellaOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['UmbrellaOff']>
export const LazyLucideUnderline: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Underline']>
export const LazyLucideUndo: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Undo']>
export const LazyLucideUndo2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Undo2']>
export const LazyLucideUndoDot: LazyComponent<typeof import("../node_modules/lucide-vue-next")['UndoDot']>
export const LazyLucideUnfoldHorizontal: LazyComponent<typeof import("../node_modules/lucide-vue-next")['UnfoldHorizontal']>
export const LazyLucideUnfoldVertical: LazyComponent<typeof import("../node_modules/lucide-vue-next")['UnfoldVertical']>
export const LazyLucideUngroup: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Ungroup']>
export const LazyLucideUniversity: LazyComponent<typeof import("../node_modules/lucide-vue-next")['University']>
export const LazyLucideUnlink: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Unlink']>
export const LazyLucideUnlink2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Unlink2']>
export const LazyLucideUnlock: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Unlock']>
export const LazyLucideUnlockKeyhole: LazyComponent<typeof import("../node_modules/lucide-vue-next")['UnlockKeyhole']>
export const LazyLucideUnplug: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Unplug']>
export const LazyLucideUpload: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Upload']>
export const LazyLucideUploadCloud: LazyComponent<typeof import("../node_modules/lucide-vue-next")['UploadCloud']>
export const LazyLucideUsb: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Usb']>
export const LazyLucideUser: LazyComponent<typeof import("../node_modules/lucide-vue-next")['User']>
export const LazyLucideUser2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['User2']>
export const LazyLucideUserCheck: LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserCheck']>
export const LazyLucideUserCheck2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserCheck2']>
export const LazyLucideUserCircle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserCircle']>
export const LazyLucideUserCircle2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserCircle2']>
export const LazyLucideUserCog: LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserCog']>
export const LazyLucideUserCog2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserCog2']>
export const LazyLucideUserMinus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserMinus']>
export const LazyLucideUserMinus2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserMinus2']>
export const LazyLucideUserPen: LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserPen']>
export const LazyLucideUserPlus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserPlus']>
export const LazyLucideUserPlus2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserPlus2']>
export const LazyLucideUserRound: LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserRound']>
export const LazyLucideUserRoundCheck: LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserRoundCheck']>
export const LazyLucideUserRoundCog: LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserRoundCog']>
export const LazyLucideUserRoundMinus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserRoundMinus']>
export const LazyLucideUserRoundPen: LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserRoundPen']>
export const LazyLucideUserRoundPlus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserRoundPlus']>
export const LazyLucideUserRoundSearch: LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserRoundSearch']>
export const LazyLucideUserRoundX: LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserRoundX']>
export const LazyLucideUserSearch: LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserSearch']>
export const LazyLucideUserSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserSquare']>
export const LazyLucideUserSquare2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserSquare2']>
export const LazyLucideUserX: LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserX']>
export const LazyLucideUserX2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['UserX2']>
export const LazyLucideUsers: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Users']>
export const LazyLucideUsers2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Users2']>
export const LazyLucideUsersRound: LazyComponent<typeof import("../node_modules/lucide-vue-next")['UsersRound']>
export const LazyLucideUtensils: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Utensils']>
export const LazyLucideUtensilsCrossed: LazyComponent<typeof import("../node_modules/lucide-vue-next")['UtensilsCrossed']>
export const LazyLucideUtilityPole: LazyComponent<typeof import("../node_modules/lucide-vue-next")['UtilityPole']>
export const LazyLucideVariable: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Variable']>
export const LazyLucideVault: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Vault']>
export const LazyLucideVegan: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Vegan']>
export const LazyLucideVenetianMask: LazyComponent<typeof import("../node_modules/lucide-vue-next")['VenetianMask']>
export const LazyLucideVenus: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Venus']>
export const LazyLucideVenusAndMars: LazyComponent<typeof import("../node_modules/lucide-vue-next")['VenusAndMars']>
export const LazyLucideVerified: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Verified']>
export const LazyLucideVibrate: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Vibrate']>
export const LazyLucideVibrateOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['VibrateOff']>
export const LazyLucideVideo: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Video']>
export const LazyLucideVideoOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['VideoOff']>
export const LazyLucideVideotape: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Videotape']>
export const LazyLucideView: LazyComponent<typeof import("../node_modules/lucide-vue-next")['View']>
export const LazyLucideVoicemail: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Voicemail']>
export const LazyLucideVolleyball: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Volleyball']>
export const LazyLucideVolume: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Volume']>
export const LazyLucideVolume1: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Volume1']>
export const LazyLucideVolume2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Volume2']>
export const LazyLucideVolumeOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['VolumeOff']>
export const LazyLucideVolumeX: LazyComponent<typeof import("../node_modules/lucide-vue-next")['VolumeX']>
export const LazyLucideVote: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Vote']>
export const LazyLucideWallet: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Wallet']>
export const LazyLucideWallet2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Wallet2']>
export const LazyLucideWalletCards: LazyComponent<typeof import("../node_modules/lucide-vue-next")['WalletCards']>
export const LazyLucideWalletMinimal: LazyComponent<typeof import("../node_modules/lucide-vue-next")['WalletMinimal']>
export const LazyLucideWallpaper: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Wallpaper']>
export const LazyLucideWand: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Wand']>
export const LazyLucideWand2: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Wand2']>
export const LazyLucideWandSparkles: LazyComponent<typeof import("../node_modules/lucide-vue-next")['WandSparkles']>
export const LazyLucideWarehouse: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Warehouse']>
export const LazyLucideWashingMachine: LazyComponent<typeof import("../node_modules/lucide-vue-next")['WashingMachine']>
export const LazyLucideWatch: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Watch']>
export const LazyLucideWaves: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Waves']>
export const LazyLucideWavesLadder: LazyComponent<typeof import("../node_modules/lucide-vue-next")['WavesLadder']>
export const LazyLucideWaypoints: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Waypoints']>
export const LazyLucideWebcam: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Webcam']>
export const LazyLucideWebhook: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Webhook']>
export const LazyLucideWebhookOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['WebhookOff']>
export const LazyLucideWeight: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Weight']>
export const LazyLucideWheat: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Wheat']>
export const LazyLucideWheatOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['WheatOff']>
export const LazyLucideWholeWord: LazyComponent<typeof import("../node_modules/lucide-vue-next")['WholeWord']>
export const LazyLucideWifi: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Wifi']>
export const LazyLucideWifiHigh: LazyComponent<typeof import("../node_modules/lucide-vue-next")['WifiHigh']>
export const LazyLucideWifiLow: LazyComponent<typeof import("../node_modules/lucide-vue-next")['WifiLow']>
export const LazyLucideWifiOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['WifiOff']>
export const LazyLucideWifiZero: LazyComponent<typeof import("../node_modules/lucide-vue-next")['WifiZero']>
export const LazyLucideWind: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Wind']>
export const LazyLucideWindArrowDown: LazyComponent<typeof import("../node_modules/lucide-vue-next")['WindArrowDown']>
export const LazyLucideWine: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Wine']>
export const LazyLucideWineOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['WineOff']>
export const LazyLucideWorkflow: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Workflow']>
export const LazyLucideWorm: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Worm']>
export const LazyLucideWrapText: LazyComponent<typeof import("../node_modules/lucide-vue-next")['WrapText']>
export const LazyLucideWrench: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Wrench']>
export const LazyLucideX: LazyComponent<typeof import("../node_modules/lucide-vue-next")['X']>
export const LazyLucideXCircle: LazyComponent<typeof import("../node_modules/lucide-vue-next")['XCircle']>
export const LazyLucideXOctagon: LazyComponent<typeof import("../node_modules/lucide-vue-next")['XOctagon']>
export const LazyLucideXSquare: LazyComponent<typeof import("../node_modules/lucide-vue-next")['XSquare']>
export const LazyLucideYoutube: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Youtube']>
export const LazyLucideZap: LazyComponent<typeof import("../node_modules/lucide-vue-next")['Zap']>
export const LazyLucideZapOff: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ZapOff']>
export const LazyLucideZoomIn: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ZoomIn']>
export const LazyLucideZoomOut: LazyComponent<typeof import("../node_modules/lucide-vue-next")['ZoomOut']>
export const LazyLucideicons: LazyComponent<typeof import("../node_modules/lucide-vue-next")['icons']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
