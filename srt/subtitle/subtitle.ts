namespace $ {
	export class $iva_srt_subtitle extends Object {
		constructor (
			private Id: number,
			private StartTime: number,
			private EndTime: number,
			private Text: string
		) {
			super();
		}

		clone() {
			return new $iva_srt_subtitle(
				this.Id,
				this.StartTime,
				this.EndTime,
				this.Text,
			);
		}

		@ $mol_mem
		id( next?: number ) {
			return next ?? this.Id;
		}

		@ $mol_mem
		start_time( next?: number ) {
			return next ?? this.StartTime;
		}

		@ $mol_mem
		end_time( next?: number ) {
			return next ?? this.EndTime;
		}

		@ $mol_mem
		text( next?: string ) {
			return next ?? this.Text;
		}
	}
}
