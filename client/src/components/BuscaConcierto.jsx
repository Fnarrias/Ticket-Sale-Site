import React from 'react';
import { useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

const BuscaConcierto = () => {
    const items = [
        {
          id: 0,
          name: 'Alanis',
          type: 'Artista'
        },
        {
          id: 1,
          name: 'Santiago',
          type: 'Cuidad'
        },
        {
          id: 2,
          name: 'Rock',
          type: 'Género'
        },
        {
          id: 3,
          name: 'PHP'
        },
        {
          id: 4,
          name: 'Java'
        }
      ]
    
      const handleOnSelect = (item) => {
        // the item selected
        console.log(`Aquí apreto seleccionar${JSON.stringify(item)}`)
      }

    return (
        <div>
            <div style={{ width: 400 }}>
                <ReactSearchAutocomplete
                items={items}
                onSelect={handleOnSelect}
                autoFocus
                />
            </div>
        </div>
    );
}

export default BuscaConcierto;
