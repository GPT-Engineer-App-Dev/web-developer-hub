import { Box, Text, Input, Button } from '@chakra-ui/react';
import { useState } from 'react';

const developers = [
  { name: 'Alice Johnson', location: 'New York', technologies: 'React, Node' },
  { name: 'Bob Smith', location: 'San Francisco', technologies: 'Angular, Java' },
  { name: 'Carol White', location: 'Austin', technologies: 'Vue, PHP' }
];

const ParticlesMarketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDevelopers, setFilteredDevelopers] = useState(developers);

  const handleSearch = () => {
    const filtered = developers.filter(dev => 
      dev.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dev.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dev.technologies.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDevelopers(filtered);
  };

  return (
    <Box p={5}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>Particles Marketplace</Text>
      <Text mb={2}>Discover top software talent ready to contribute to your projects.</Text>
      <Input placeholder="Search by name, location, or technology" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <Button onClick={handleSearch} mt={2}>Search</Button>
      {filteredDevelopers.map(dev => (
        <Box key={dev.name} p={4} mt={2} borderWidth="1px" borderRadius="lg">
          <Text fontWeight="bold">{dev.name}</Text>
          <Text>{dev.location}</Text>
          <Text>{dev.technologies}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default ParticlesMarketplace;