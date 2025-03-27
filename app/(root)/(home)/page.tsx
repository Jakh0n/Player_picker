'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { useState } from 'react'
import { FaLinkedin } from 'react-icons/fa'

export default function PlayerPicker() {
	const [players, setPlayers] = useState<string[]>([])
	const [name, setName] = useState('')
	const [teams, setTeams] = useState<string[][]>([])
	const [teamCount, setTeamCount] = useState(2)

	const addPlayer = () => {
		if (name.trim() !== '') {
			setPlayers([...players, name])
			setName('')
		}
	}

	const divideIntoTeams = () => {
		if (players.length > 1) {
			const shuffledPlayers = [...players].sort(() => Math.random() - 0.5)
			const newTeams: string[][] = Array(teamCount)
				.fill(null)
				.map(() => [])

			shuffledPlayers.forEach((player, index) => {
				newTeams[index % teamCount].push(player)
			})

			setTeams(newTeams)
		}
	}

	return (
		<div className='min-h-screen flex items-center justify-center'>
			<div className='p-4 max-w-md mx-auto text-center border rounded-lg shadow-md w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl'>
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
				<Select onValueChange={value => setTeamCount(Number(value))}>
					<SelectTrigger className='w-full mb-2'>
						<SelectValue placeholder='Select number of teams' />
					</SelectTrigger>
					<SelectContent>
						{[2, 3, 4].map(num => (
							<SelectItem key={num} value={num.toString()}>
								{num} Teams
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				<Button onClick={divideIntoTeams} className='mb-2 w-full'>
					Divide into Teams
				</Button>
				<div className='mt-4'>
					<h3 className='font-semibold'>Teams</h3>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-2'>
						{teams.map((team, teamIndex) => (
							<div key={teamIndex} className='border rounded-md p-2'>
								<h4 className='font-semibold text-center'>
									Team {teamIndex + 1}
								</h4>
								<ul className='max-h-40 overflow-auto'>
									{team.map((player, index) => (
										<li key={index} className='border-b px-2 py-1'>
											{index + 1}. {player}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
				<footer className='mt-6 text-center text-sm'>
					<p>Product made by Jakhon Yokubov</p>
					<a
						href='https://www.linkedin.com/in/jakhon-yokubov/'
						target='_blank'
						rel='noopener noreferrer'
						className='inline-flex items-center gap-1 text-blue-600 hover:underline'
					>
						<FaLinkedin /> Connect on LinkedIn
					</a>
				</footer>
			</div>
		</div>
	)
}
