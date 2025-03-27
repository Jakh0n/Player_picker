'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

export default function PlayerPicker() {
	const [players, setPlayers] = useState<string[]>([])
	const [name, setName] = useState('')
	const [team1, setTeam1] = useState<string[]>([])
	const [team2, setTeam2] = useState<string[]>([])

	const addPlayer = () => {
		if (name.trim() !== '') {
			setPlayers([...players, name])
			setName('')
		}
	}

	const divideIntoTeams = () => {
		if (players.length > 1) {
			const shuffledPlayers = [...players].sort(() => Math.random() - 0.5)
			const mid = Math.ceil(shuffledPlayers.length / 2)
			setTeam1(shuffledPlayers.slice(0, mid))
			setTeam2(shuffledPlayers.slice(mid))
		}
	}

	return (
		<div className='min-h-screen flex items-center justify-center'>
			<div className='p-4 max-w-md mx-auto text-center border rounded-lg shadow-md w-full sm:w-96'>
				<h2 className='text-xl font-bold mb-2'>Team Divider</h2>
				<div className='flex flex-col sm:flex-row gap-2 mb-4'>
					<Input
						type='text'
						value={name}
						onChange={e => setName(e.target.value)}
						placeholder='Enter player name'
						className='flex-1'
					/>
					<Button onClick={addPlayer} className='w-full sm:w-auto'>
						Add
					</Button>
				</div>
				<ul className='mb-4 text-left max-h-40 overflow-auto border p-2 rounded-md'>
					{players.map((player, index) => (
						<li key={index} className='border-b py-1'>
							{player}
						</li>
					))}
				</ul>
				<Button onClick={divideIntoTeams} className='mb-2 w-full'>
					Divide into Teams
				</Button>
				<div className='mt-4'>
					<h3 className='font-semibold'>Teams</h3>
					<div className='flex gap-4 overflow-x-auto p-2'>
						<div className='border rounded-md p-2 w-1/2'>
							<h4 className='font-semibold text-center'>Team 1</h4>
							<ul className='max-h-40 overflow-auto'>
								{team1.map((player, index) => (
									<li key={index} className='border-b px-2 py-1'>
										{index + 1}. {player}
									</li>
								))}
							</ul>
						</div>
						<div className='border rounded-md p-2 w-1/2'>
							<h4 className='font-semibold text-center'>Team 2</h4>
							<ul className='max-h-40 overflow-auto'>
								{team2.map((player, index) => (
									<li key={index} className='border-b px-2 py-1'>
										{index + 1}. {player}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
