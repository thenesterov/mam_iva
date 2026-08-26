namespace $ {
	export function $iva_srt_to_string( source: $iva_srt_subtitle[] ): string {
		return source.map( subtitle => {
			return `${ subtitle.id() }
${ milliseconds_to_string_time( subtitle.start_time() )} --> ${ milliseconds_to_string_time( subtitle.end_time() )}
${ subtitle.text() }`
			}).join("\n\n")
	}

	function milliseconds_to_string_time( ms: number ): string {
		const hours = Math.floor( ms / 3600000 );
		const minutes = Math.floor(( ms % 3600000 ) / 60000 );
		const seconds = Math.floor(( ms % 60000 ) / 1000 );
		const milliseconds = Math.floor( ms % 1000 );

		const h = hours.toString().padStart( 2, "0" );
		const m = minutes.toString().padStart( 2, "0" );
		const s = seconds.toString().padStart( 2, "0" );
		const ms_str = milliseconds.toString().padStart( 3, "0" );

		return `${h}:${m}:${s},${ms_str}`;
	}
}
