type ModalProp = {
	title: string,
	description: string
}

export const Modal = ({ title, description }: ModalProp) => {
	return <div className="mx-auto p-10 absolute flex w-full" style={{
		justifyContent: "center",
		alignContent: "center"
	}}>
		<div className="border w-96 shadow-lg rounded-md bg-red-100 border-red-500">
			<div className="mt-3 text-center">
				<h3 className="text-lg leading-3 font-medium text-red-900">{title}</h3>
				<div className="mt-2 px-7 py-2">
					<p className="text-sm text-gray-500">
						{description}
					</p>
				</div>
			</div>
		</div>
	</div >
}