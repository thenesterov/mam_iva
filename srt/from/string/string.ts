namespace $ {
	export function $iva_srt_from_string( source: string ): $iva_srt_subtitle[] {
		return source.split("\n\n").flatMap(plain_subtitle => {
			const parts = plain_subtitle.split("\n");

			if (plain_subtitle.length == 0) {
				return []
			}

			const [plain_id, plain_duration, ...plain_text] = parts;
			const [plain_start_time, plain_end_time] = plain_duration.split(" --> ")

			const id = Number.parseInt( plain_id );
			const start_time = string_time_to_milliseconds( `${plain_start_time.trim()}` );
			const end_time = string_time_to_milliseconds( `${plain_end_time.trim()}` );

			return [new $iva_srt_subtitle(
				id,
				start_time,
				end_time,
				plain_text.join("\n"),
			)];
		});
	}

	function string_time_to_milliseconds( time: string ) {
		const cleaned = time.replace(",", ".");
		const [hours, minutes, seconds_and_ms] = cleaned.split(":");
		const [seconds, milliseconds] = seconds_and_ms.split(".");

		return (
			parseInt(hours) * 3600000 +
			parseInt(minutes) * 60000 +
			parseInt(seconds) * 1000 +
			parseInt(milliseconds)
		);
	}
}
