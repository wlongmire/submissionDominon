import React from 'react';

const TagList = ({ tags }) => (
  <div className="tags">
    {
      tags.slice(0, 3).map(t => (
        <span className="badge badge-info">{t}</span>
      ))
    }
    {
      (tags.length > 4 && <a href="#">
        <span className="moreBadge badge badge-info">
          <i class="fas fa-ellipsis-h"></i>
        </span>
      </a>)
    }
  </div>
)

export default TagList;