// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'

const Standing = () => {
  // Sample data for the standings table
  const teams = [
    { name: 'Abiala Giants', played: 0, wins: 0, draws: 0, losses: 0, points: 0 },
    { name: 'Olukoya Boys', played: 0, wins: 0, draws: 0, losses: 0, points: 0 },
    { name: 'Ojo Eagles', played: 0, wins: 0, draws: 0, losses: 0, points: 0 },
    { name: 'Adeshina', played: 0, wins: 0, draws: 0, losses: 0, points: 0 },
    { name: 'Young Stars', played: 0, wins: 0, draws: 0, losses: 0, points: 0 },
  ]

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 800, margin: 'auto', mt: 4 }}>
      <Table>
        <TableHead sx={{ backgroundColor: 'black' }}>
          <TableRow>
            <TableCell sx={{ color: 'white' }}>Position</TableCell>
            <TableCell sx={{ color: 'white' }}>Team</TableCell>
            <TableCell sx={{ color: 'white' }}>Played</TableCell>
            <TableCell sx={{ color: 'white' }}>Wins</TableCell>
            <TableCell sx={{ color: 'white' }}>Draws</TableCell>
            <TableCell sx={{ color: 'white' }}>Losses</TableCell>
            <TableCell sx={{ color: 'white' }}>Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teams.map((team, index) => (
            <TableRow key={team.name}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{team.name}</TableCell>
              <TableCell>{team.played}</TableCell>
              <TableCell>{team.wins}</TableCell>
              <TableCell>{team.draws}</TableCell>
              <TableCell>{team.losses}</TableCell>
              <TableCell>{team.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Standing
