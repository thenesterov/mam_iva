namespace $.$$ {
	export class $iva_attach_file extends $.$iva_attach_file {
		@ $mol_mem
		file(): File {
			return this.files().at(0)!; // TODO: может ли не быть? разобраться позже
		}

		@ $mol_mem
		title(): string {
			const filename = this.file()?.name ?? "";
			return this.cut_string(filename, this.title_max_length());
		}

		@ $mol_mem
		tooltip(): string {
			return this.file()?.name ?? "...";
		}

		cut_string(str: string, max_length: number): string {
			if (str.length <= max_length) {
				return str;
			}

			const keep = Math.floor((max_length - 3) / 2);
			const start = str.substring(0, keep);
			const end = str.substring(str.length - keep);

			return `${start}...${end}`;
		}
	}
}
