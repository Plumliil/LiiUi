const methods: any = import.meta.glob("../components/*.vue", { eager: true });

interface IconsType {
  [x: string]: any;
}

let icons: IconsType = {};
for (const key in methods) {
  icons[key.substring(14).split(".")[0]] = methods[key].default;
}

export { icons };
