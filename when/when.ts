namespace $ {
	export class $iva_when {
		sub() {
			return [] as readonly ($mol_view|Node|string|number|boolean)[]
		}

		*[Symbol.iterator]() {
			yield* this.sub().filter(view => (view as any).when?.() ?? true);
		}
	}
}
